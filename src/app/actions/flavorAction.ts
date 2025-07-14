"use server";

import {
  AddFlavor,
  deleteFlavor,
  updateFlavor,
} from "../data-access-layer/flavorDAL";
import {
  FlavorFormSchema,
  FormFlavorState,
  FormFlavorSuggestState,
} from "../lib/definitions";
import { redirect } from "next/navigation";
import { getSession } from "../lib/session";
import { Resend } from "resend";
import { EmailFlavorTemplate } from "../ui/EmailTemplate";
import { getDictionary } from "../[lang]/dictionaries";

export async function AddFlavorAction(
  state: FormFlavorState,
  formData: FormData,
): Promise<FormFlavorState> {
  try {
    const language = formData.get("language")?.toString() || "en";

    const result = FlavorFormSchema.safeParse({
      name: formData.get("name"),
      img: formData.get("img"),
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { name, img } = result.data;

    const { status, message } = await AddFlavor(name, img, language);
    if (status === 403) {
      redirect(`/${language}/unAuthorized`);
    }
    if (status === 409) {
      return {
        errors: {
          name: [message || "Failed to create flavor / فشل إضافة نكهة "],
        },
      };
    }

    if (status !== 201) {
      return {
        general: message || "Failed to create flavor / فشل إضافة نكهة ",
      };
    }

    return { success: true, general: message };
  } catch (error) {
    return {
      general: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
}
export async function UpdateFlavorAction(
  state: FormFlavorState,
  formData: FormData,
): Promise<FormFlavorState> {
  try {
    const result = FlavorFormSchema.safeParse({
      name: formData.get("name"),
      img: formData.get("img"),
    });

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { name, img } = result.data;
    const language = formData.get("language")?.toString() || "en";
    const id = formData.get("id") as string;

    const { status, message } = await updateFlavor({
      id: id,
      name: name,
      primaryImg: img,
      lang: language,
    });
    if (status === 403) {
      redirect(`/${language}/unAuthorized`);
    }
    // if (status === 404) {
    //   return {
    //     errors: {
    //       name: [message || "Failed to update flavor / فشل تعديل النكهة "],
    //     },
    //   };
    // }

    if (status !== 200) {
      return {
        general: message || "Failed to update flavor / فشل تعديل النكهة ",
      };
    }

    return { success: true, general: message };
  } catch (error) {
    return {
      general: "Internal server error / خطأ في المخدم الداخلي",
    };
  }
}
export async function DeleteFlavorAction(
  deleteAll: string,
  selectedField: any,
) {
  try {
    const { status } = await deleteFlavor(
      deleteAll === "on" ? true : false,
      selectedField,
    );
    if (status !== 200) {
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
export async function SuggestFlavorAction(
  state: FormFlavorSuggestState,
  formData: FormData,
) {
  try {
    const session = await getSession();
    if (session.status !== 200 || !session.user) {
      return {
        status: session.status,
        message: session.messageEn + " / " + session.messageAr,
      };
    }
    const t = await getDictionary(formData.get("lang") as string);
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_CO!,
      subject: "Flavor suggestion",
      react: EmailFlavorTemplate({
        userName: session.user.name,
        userEmail: session.user?.email,
        text: formData.get("details") as string,
        t: t,
      }),
    });
    if (error) {
      return {
        success: false,
        general: "Failed to send email / فشل في إرسال الإيميل",
      };
    } else {
      return {
        success: true,
        general: "your suggestion successfully sent / تم إرسال اقتراحك ♡ ",
      };
    }
  } catch (error) {
    return {
      success: false,
      general: "Failed to send email / فشل في إرسال الإيميل",
    };
  }
}
