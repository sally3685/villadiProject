"use server";
import {
  SignupFormSchema,
  FormSignUpState,
  FormSignInState,
  SigninFormSchema,
  FormCodeState,
  CodeFormSchema,
  FormCodeVerifyState,
  resetFormSchema,
  FormResetState,
} from "../lib/definitions";
import {
  createUser,
  checkUser,
  getUserByEmail,
  UpdateUserVerify,
  updateUserPassword,
} from "../data-access-layer/user";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";
import { generateSalt, hashPassword } from "../../../helpers/passwordHasher";

import { headers } from "next/headers";
import {
  createVerifyPassSession,
  createVerifySession,
  deletePassSession,
  deleteVerifySession,
  getVerifyPassSession,
  getVerifySession,
} from "../lib/verifyEmailSession";
import { getDictionary } from "../[lang]/dictionaries";
export async function SignInAction(state: FormSignInState, formData: FormData) {
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get("email"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email } = validatedFields.data;

  const { status, message, user } = await checkUser(
    email,
    formData.get("password") as string,
  );
  if (status === 400) {
    return {
      general2: message,
    };
  }
  if (status === 500) {
    return {
      general: message,
    };
  }
  if (status === 409 || status === 404) {
    return {
      errors: {
        email: [message],
      },
    };
  }
  if (status === 401) {
    return {
      password: [message],
    };
  }
  if (!user) {
    return {
      general: "internal server error 😔 / خطأ في المخدم الداخلي 😔",
    };
  }
  await createSession(user.id, user.role);

  const headersList = await headers();
  const fullUrl = headersList.get("referer") || "";
  if (fullUrl?.includes("en")) redirect("/en");
  else redirect("/ar");
}
export async function ResendCodeAction(
  state: FormCodeState,
  formData: FormData,
) {
  try {
    const validatedFields = SigninFormSchema.safeParse({
      email: formData.get("email"),
    });
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { email } = validatedFields.data;
    const res = await getUserByEmail(email);
    if (res.userData?.verified) {
      return {
        errors: {
          email: [
            "Email Already Verified , just Sign in / تم بالفعل تأكيد حسابك فقط قم بتسجيل الدخول",
          ],
        },
      };
    }
    if (!res.success || !res.userData) {
      return {
        errors: {
          email: [
            "email not found sign up first / الإيميل غير موجود أنشئ حساب أولا",
          ],
        },
      };
    }

    const t = await getDictionary(formData.get("lang") as string);
    const res1 = await createVerifySession(
      res.userData.id,
      res.userData.name,
      res.userData.email,
      t,
    );
    return {
      success: res1.success,
    };
  } catch {
    return {
      general: "internal server error 😔 / خطأ في المخدم الداخلي 😔",
    };
  }
}
export async function ResendCodePassAction(
  state: FormCodeState,
  formData: FormData,
) {
  try {
    const validatedFields = SigninFormSchema.safeParse({
      email: formData.get("email"),
    });
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { email } = validatedFields.data;
    const res = await getUserByEmail(email);

    if (!res.success || !res.userData) {
      return {
        errors: {
          email: [
            "email not found sign up first / الإيميل غير موجود أنشئ حساب أولا",
          ],
        },
      };
    }
    const t = await getDictionary(formData.get("lang") as string);
    const res1 = await createVerifyPassSession(
      res.userData.id,
      res.userData.name,
      res.userData.email,
      t,
    );
    return {
      success: res1.success,
    };
  } catch (error) {
    return {
      general: "internal server error 😔 / خطأ في المخدم الداخلي 😔",
    };
  }
}

export async function VerifyCodeAction(
  state: FormCodeVerifyState,
  formData: FormData,
) {
  try {
    const validatedFields = CodeFormSchema.safeParse({
      code1: parseInt(formData.get("code1") as string),
      code2: parseInt(formData.get("code2") as string),
      code3: parseInt(formData.get("code3") as string),
      code4: parseInt(formData.get("code4") as string),
    });
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { code1, code2, code3, code4 } = validatedFields.data;
    const res = await getVerifySession();
    if (res.success === false || !res.userCode || !res.user) {
      return {
        general2:
          "code expired click on resend email / انتهت صلاحية الكود اضغط على إعادة إرسال إيميل",
      };
    }
    let numbers = "";
    numbers = numbers.concat(formData.get("code1") as string);
    numbers = numbers.concat(formData.get("code2") as string);
    numbers = numbers.concat(formData.get("code3") as string);
    numbers = numbers.concat(formData.get("code4") as string);
    numbers = JSON.stringify(numbers);
    if (numbers !== res.userCode) {
      return {
        errors: {
          code1: ["code not matching / الكود غير متطابق"],
        },
      };
    }
    const res1 = await getUserByEmail(res.user.email);
    if (!res1.success || !res1.userData) {
      return {
        general:
          "email not found sign up first / الإيميل غير موجود أنشئ حساب أولا",
      };
    }
    await deleteVerifySession();
    const success = await UpdateUserVerify(res1.userData.id);
    if (!success) {
      return {
        general: "internal server error 😔 / خطأ في المخدم الداخلي 😔",
      };
    }
    const res2 = await createSession(res1.userData.id, res1.userData.role);

    const headersList = await headers();
    const fullUrl = headersList.get("referer") || "";
    if (fullUrl?.includes("en")) redirect("/en");
    else redirect("/ar");
  } catch (error) {
    return {
      general: "internal server error 😔 / خطأ في المخدم الداخلي 😔",
    };
  }
}
export async function VerifyPassAction(
  state: FormCodeVerifyState,
  formData: FormData,
) {
  try {
    const validatedFields = CodeFormSchema.safeParse({
      code1: parseInt(formData.get("code1") as string),
      code2: parseInt(formData.get("code2") as string),
      code3: parseInt(formData.get("code3") as string),
      code4: parseInt(formData.get("code4") as string),
    });
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { code1, code2, code3, code4 } = validatedFields.data;
    const res = await getVerifyPassSession();
    if (res.success === false || !res.userCode || !res.user) {
      return {
        general2:
          "code expired click on resend email / انتهت صلاحية الكود اضغط على إعادة إرسال إيميل",
      };
    }
    let numbers = "";
    numbers = numbers.concat(formData.get("code1") as string);
    numbers = numbers.concat(formData.get("code2") as string);
    numbers = numbers.concat(formData.get("code3") as string);
    numbers = numbers.concat(formData.get("code4") as string);
    numbers = JSON.stringify(numbers);
    if (numbers !== res.userCode) {
      return {
        errors: {
          code1: ["code not matching / الكود غير متطابق"],
        },
      };
    }
    const res1 = await getUserByEmail(res.user.email);
    if (!res1.success || !res1.userData) {
      return {
        general:
          "email not found sign up first / الإيميل غير موجود أنشئ حساب أولا",
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    return {
      general: "internal server error 😔 / خطأ في المخدم الداخلي 😔",
    };
  }
}
export async function resetAction(state: FormResetState, formData: FormData) {
  const validatedFields = resetFormSchema.safeParse({
    password: formData.get("password"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { password } = validatedFields.data;
  const res = await getVerifyPassSession();

  if (!res.success) {
    return {
      general2:
        "code expired click on resend email / انتهت صلاحية الكود اضغط على إعادة إرسال إيميل",
    };
  }

  if (!res.user) {
    return {
      general:
        "email not found sign up first / الإيميل غير موجود أنشئ حساب أولا",
    };
  }
  const data1 = await updateUserPassword(res.user.email, password);
  if (data1.status !== 200 || !data1.user) {
    return {
      general: "internal server error 😔 / خطأ في المخدم الداخلي 😔",
    };
  }
  await deletePassSession();
  // await createSession(data1.user?.id, data1.user?.password);
  const headersList = await headers();
  const fullUrl = headersList.get("referer") || "";
  if (fullUrl?.includes("en")) redirect("/en/signIn");
  else redirect("/ar/signIn");
}

export async function SignUpAction(state: FormSignUpState, formData: FormData) {
  const res = await getVerifySession();
  if (res.success === true) {
    return {
      general2:
        "Already signed up .your email and password were stored during the previus sign up. click on verify / لقد قمت بالفعل بإنشاء حساب . تم حفظ بريدك الالكتروني وكلمة السر خلال اخر إنشاء حساب قمت به .اضغط على تأكيد حسابي ",
    };
  }
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    const res1 = await getUserByEmail(email);

    if (
      res1 &&
      res1.success &&
      res1.userData &&
      res1.userData.verified === false
    ) {
      return {
        general2:
          "Already signed up .your email and password were stored during the previus sign up. click on verify / لقد قمت بالفعل بإنشاء حساب . تم حفظ بريدك الالكتروني وكلمة السر خلال اخر إنشاء حساب قمت به .اضغط على تأكيد حسابي ",
      };
    } else if (
      res1 &&
      res1.success &&
      res1.userData &&
      res1.userData.verified === true
    ) {
      return {
        general2:
          "Already signed up and verified .click on `Alredy have an account` / لقد قمت بالفعل بتسجيل حسابك وتأكيده . اضغط على `لدي حساب بالفعل`",
      };
    }
    const salt = generateSalt();
    const hashedPassword = await hashPassword(password, salt);

    const { status, message, user } = await createUser(
      name,
      email,
      hashedPassword,
      salt,
    );
    if (status === 500) {
      return {
        general: message,
      };
    }
    if (status === 409) {
      return {
        errors: {
          email: [message],
        },
      };
    }
    if (!user) {
      return {
        general: "internal server error 😔 / خطأ في المخدم الداخلي 😔",
      };
    }
    await createVerifySession(user.id, name, email, formData.get("t") as any);
  } catch (error) {
    return {
      general: "internal server error 😔 / خطأ في المخدم الداخلي 😔",
    };
  }

  const headersList = await headers();
  const fullUrl = headersList.get("referer") || "";
  if (fullUrl?.includes("en")) redirect("/en/VerifyEmail");
  else redirect("/ar/VerifyEmail");
}

export async function LogOut() {
  await deleteSession();
  const headersList = await headers();
  const fullUrl = headersList.get("referer") || "";
  if (fullUrl?.includes("en")) redirect("/en");
  else redirect("/ar");
}
