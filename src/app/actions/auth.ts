'use server';
import {
  SignupFormSchema,
  FormSignUpState,
  FormSignInState,
  SigninFormSchema,
} from '../lib/definitions';
import { createUser, checkUser } from '../data-access-layer/user';
import { createSession, deleteSession } from '../lib/session';
import { redirect } from 'next/navigation';
import { generateSalt, hashPassword } from '../../../helpers/passwordHasher';
export async function SignInAction(state: FormSignInState, formData: FormData) {
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get('email'),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email } = validatedFields.data;
  const { status, message, user } = await checkUser(
    email,
    formData.get('password') as string
  );
  //fix errors
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
      general: 'error occured',
    };
  }
  await createSession(user.id, user.role);
  redirect('/');
}

export async function SignUpAction(state: FormSignUpState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  try {
    const salt = generateSalt();
    const hashedPassword = await hashPassword(password, salt);

    const { status, message, user } = await createUser(
      name,
      email,
      hashedPassword,
      salt
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
        general: 'error occured',
      };
    }

    await createSession(user.id, user.role);
  } catch (error) {
    return {
      general: 'error occured',
    };
  }

  redirect('/');
}
export async function LogOut() {
  await deleteSession();
  redirect('/');
}
