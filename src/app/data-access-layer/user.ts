import { User } from '@/generated/prisma';
import prisma from '../lib/db';
import { cache } from 'react';
import { comparePasswords } from '../../../helpers/passwordHasher';
function getSignUpDTO(user: User) {
  return {
    id: user.id,
    role: user.role,
  };
}
export const createUser = async (
  name: string,
  email: string,
  password: string,
  salt: string
) => {
  try {
    const exsitedUser = await prisma.user.findFirst({
      where: { email: email },
    });
    if (exsitedUser) {
      return {
        status: 409, //conflict
        message: 'email used , try sign in',
      };
    }

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        role: 'User',
        salt: salt,
      },
    });

    return {
      status: 201, //created
      message: 'user created',
      user: getSignUpDTO(newUser),
    };
  } catch (error) {
    return {
      status: 500,
      message: 'internal server error',
    };
  }
};
// export const getAllUsers = cache(async () => {
//   const session = await verifySession();
//   if (!session) return null;

//   try {
//     const data = await prisma.user.findMany({
//       select: {
//         name: true,
//         role: true,
//       },
//     });

//     return {
//       users: data,
//     };
//   } catch (error) {
//     console.log('Failed to fetch user');
//     return null;
//   }
// });
export const checkUser = cache(async (email: string, password: string) => {
  try {
    const data = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!data) {
      return {
        status: 404,
        message: 'email not found',
      };
    }
    const correctPassword = await comparePasswords({
      hashedPassword: data.password,
      password: password,
      salt: data.salt,
    });

    if (!correctPassword) {
      return {
        status: 401, //unauthorized
        message: 'wrong password',
      };
    }
    return {
      status: 200,
      message: 'user signed in',
      user: getSignUpDTO(data),
    };
  } catch (error) {
    return {
      status: 500,
      message: 'internal server error',
    };
  }
});
