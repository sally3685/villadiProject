import { User } from "../../../prisma/generated/prisma";
import prisma from "../lib/db";
import { cache } from "react";
import { comparePasswords } from "../../../helpers/passwordHasher";
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
        message: "email used , try sign in",
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
      message: "user created",
      user: getSignUpDTO(newUser),
    };
  } catch (error) {
    return {
      status: 500,
      message: "internal server error",
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
        message: "email not found",
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
        message: "wrong password",
      };
    }
    return {
      status: 200,
      message: "user signed in",
      user: getSignUpDTO(data),
    };
  } catch (error) {
    return {
      status: 500,
      message: "internal server error",
    };
  }
});
export const getUserById = cache(async (userId: string) => {
  try {
    const userData = await prisma.user.findFirst({
      where: { id: userId },
      select: { role: true, name: true, email: true },
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

    if (!users) {
      return {
        success: false,
        message: "No regular users found",
        users: [],
      };
    }
    if (!users || users.length === 0) {
      return {
        success: true,
        message: "No regular users found",
        users: [],
      };
    }
    return {
      success: true,
      message: "Users retrieved successfully",
      users,
    };
  } catch (error) {
    console.error("Error in getAllUsers:", error);
    return {
      success: false,
      message: "Failed to retrieve users",
      users: [],
    };
  }
};

export const grantAdminP = async (userId: string) => {
  try {
    // Validate user ID
    if (!userId || typeof userId !== "string") {
      return {
        status: 400,
        message: "Invalid user ID",
      };
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }

    // Check if user is already an admin
    if (user.role === "Admin") {
      return {
        status: 400,
        message: "User is already an admin",
      };
    }

    // Update user role to Admin
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        role: "Admin",
      },
    });

    if (!updatedUser) {
      return {
        status: 500,
        message: "Failed to update user role",
      };
    }

    // Revalidate relevant paths
    // revalidatePath("/admin/users");
    // revalidatePath("/");

    return {
      status: 200,
      message: "User promoted to admin successfully",
    };
  } catch (error) {
    console.error("Error in grantAdminP:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
export const removeAdminP = async (userP: User) => {
  try {
    // Validate user ID
    if (!userP.id || typeof userP.id !== "string") {
      return {
        status: 400,
        message: "Invalid user ID",
      };
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userP.id },
    });

    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }

    // Check if user is already an admin
    if (user.role === "User") {
      return {
        status: 400,
        message: "User is already an admin",
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
    // Update user role to Admin
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

    // Revalidate relevant paths
    // revalidatePath("/admin/users");
    // revalidatePath("/");

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
