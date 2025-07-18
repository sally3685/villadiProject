import "server-only";
import { User } from "../../../prisma/generated/prisma";
import prisma from "../lib/db";
import { cache } from "react";
import {
  comparePasswords,
  generateSalt,
  hashPassword,
} from "../../../helpers/passwordHasher";
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
  salt: string,
) => {
  try {
    const exsitedUser = await prisma.user.findFirst({
      where: { email: email },
    });
    if (exsitedUser) {
      return {
        status: 409, //conflict
        message:
          "email used , try sign in / الايميل مستخدم الرجاء اختيار ايميل اخر",
      };
    }

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        role: "User",
        salt: salt,
      },
    });

    return {
      status: 201, //created
      message: "user created / تم إنشاء الحساب",
      user: getSignUpDTO(newUser),
    };
  } catch (error) {
    return {
      status: 500,
      message: "internal server error / خطأ في المخدم الداخلي",
    };
  }
};
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
        message: "email not found / لم يتم إيجاد البريد الالكتروني",
      };
    }
    if (data.verified === false) {
      return {
        status: 400,
        message:
          "please verify your email first / من فضلك قم بتأكيد حسابك أولا",
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
        message: "wrong password / كلمة السر خاطئة",
      };
    }
    return {
      status: 200,
      message: "user signed in / المستخدم سجل دخوله مسبقا",
      user: getSignUpDTO(data),
    };
  } catch (error) {
    return {
      status: 500,
      message: "internal server error / خطأ في المخدم الداخلي",
    };
  }
});

export const updateUserPassword = cache(
  async (email: string, password: string) => {
    try {
      const data = await prisma.user.findFirst({
        where: { email: email },
      });

      if (!data) {
        return {
          status: 404,
          message: "email not found / لم يتم إيجاد المستخدم",
        };
      }
      const salt = generateSalt();
      const hashedPassword = await hashPassword(password, salt);
      const data1 = await prisma.user.update({
        where: { email: email },
        data: {
          password: hashedPassword,
          salt: salt,
        },
      });

      if (!data1) {
        return {
          status: 404,
          message: "email not found / لم يتم إيجاد المستخدم",
        };
      }
      return {
        status: 200,
        message: "password reset successfully / تم تغيير كلمة السر بنجاح",
        user: data1,
      };
    } catch (error) {
      return {
        status: 500,
        message: "internal server error / خطأ في المخدم الداخلي",
      };
    }
  },
);

export const getUserById = cache(async (userId: string) => {
  try {
    const userData = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (!userData) {
      return {
        status: 404, // Not Found
        messageEn: "User not found 😔",
        messageAr: "المستخدم غير موجود 😔",
      };
    }

    return {
      status: 200, // OK
      messageEn: "User retrieved successfully ♡",
      messageAr: "تم استرجاع المستخدم بنجاح ♡",
      userData,
    };
  } catch (error) {
    return {
      status: 500, // Internal Server Error
      messageEn: "Failed to retrieve user 😔",
      messageAr: "فشل في استرجاع المستخدم 😔",
    };
  }
});
export const getUserByEmail = cache(async (email: string) => {
  try {
    const userData = await prisma.user.findFirst({
      where: { email: email },
    });
    return {
      success: true,
      userData,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
});
export const UpdateUserVerify = cache(async (id: string) => {
  try {
    const userData = await prisma.user.update({
      where: { id: id },
      data: {
        verified: true,
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
});
export const GetUserVerify = cache(async (id: string) => {
  try {
    const userData = await prisma.user.findFirst({
      where: { id: id },
      select: { verified: true },
    });
    return {
      success: true,
      verified: userData,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
});
//   const session = await verifySession();
//   if (!session) return null;

export const getAllUsers = async (role: string) => {
  try {
    const users = await prisma.user.findMany({
      where: { role: role },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (!users || users.length === 0) {
      return {
        status: 404,
        messageEn: "No users found with this role 😔",
        messageAr: "لا يوجد مستخدمون بهذا الدور 😔",
        users: [],
      };
    }

    return {
      status: 200,
      messageEn: "Users retrieved successfully ♡",
      messageAr: "تم استرجاع المستخدمين بنجاح ♡",
      users,
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Failed to retrieve users 😔",
      messageAr: "فشل في استرجاع المستخدمين 😔",
      users: [],
    };
  }
};

export const grantAdminP = async (userId: string) => {
  try {
    if (!userId || typeof userId !== "string") {
      return {
        status: 400,
        messageEn: "Invalid user ID 😔",
        messageAr: "معرف المستخدم غير صالح 😔",
      };
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return {
        status: 404,
        messageEn: "User not found 😔",
        messageAr: "المستخدم غير موجود 😔",
      };
    }

    if (user.role === "Admin") {
      return {
        status: 400,
        messageEn: "User is already an admin ♡",
        messageAr: "المستخدم مدير بالفعل ♡",
      };
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { role: "Admin" },
    });

    if (!updatedUser) {
      return {
        status: 500,
        messageEn: "Failed to update user role 😔",
        messageAr: "فشل تحديث دور المستخدم 😔",
      };
    }

    return {
      status: 200,
      messageEn: "User promoted to admin successfully ♡",
      messageAr: "تم ترقية المستخدم إلى مدير بنجاح ♡",
    };
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في الخادم الداخلي 😔",
    };
  }
};
export const removeAdminP = async (userP: User) => {
  try {
    if (!userP.id || typeof userP.id !== "string") {
      return {
        status: 400,
        message: "Invalid user ID",
      };
    }
    const user = await prisma.user.findUnique({
      where: { id: userP.id },
    });

    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }

    if (user.role === "User") {
      return {
        status: 400,
        message: "Admin is already a user",
      };
    }
    const finalUser = await prisma.user.findMany({
      where: { role: "Admin" },
    });
    if (finalUser.length === 1) {
      return {
        status: 500,
        message: "last admin cant be removed",
      };
    }
    const updatedUser = await prisma.user.update({
      where: { id: userP.id },
      data: {
        role: "User",
      },
    });

    if (!updatedUser) {
      return {
        status: 500,
        message: "Failed to update user role",
      };
    }

    return {
      status: 200,
      message: "user is now a user successfully",
    };
  } catch (error) {
    console.error("Error in removeAdminP:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
