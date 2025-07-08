import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(20, { message: "Name cannot exceed 20 characters" })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .max(20, { message: "Be at most 20 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});

export const SigninFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
});
export const resetFormSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .max(25, { message: "Be at most 25 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    }),
});
export const CodeFormSchema = z.object({
  code1: z
    .number()
    .min(0, "No less than 0") // Minimum value
    .max(9, "No more than 9") // Maximum value
    .int("Must be an integer"),
  code2: z
    .number()
    .min(0, "No less than 0") // Minimum value
    .max(9, "No more than 9") // Maximum value
    .int("Must be an integer"),
  code3: z
    .number()
    .min(0, "No less than 0") // Minimum value
    .max(9, "No more than 9") // Maximum value
    .int("Must be an integer"),
  code4: z
    .number()
    .min(0, "No less than 0") // Minimum value
    .max(9, "No more than 9") // Maximum value
    .int("Must be an integer"),
});
const fileSizeLimit = 3 * 1024 * 1024;
export const CategoryFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "should have at least one letter" })
    .trim()
    .max(25, { message: "Name cannot exceed 25 characters" }),

  code: z
    .string()
    .nonempty({ message: "should have at least one letter" })

    .trim(),
  detailes: z
    .string()
    .nonempty({ message: "should give some words about it" })
    .trim()
    .max(250, { message: "Cannot exceed 250 characters" }),
  img: z.string().nonempty({ message: "should have at least one letter" }),
});
export const ProductFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "should have at least one letter" })
    .max(25, { message: "Name cannot exceed 25 characters" })
    .trim(),
  code: z
    .string()
    .nonempty({ message: "should have at least one letter" })
    .trim(),
  detailes: z
    .string()
    .nonempty({ message: "should give some words about it" })
    .trim()
    .max(250, { message: "Cannot exceed 250 characters" }),
  selectedC: z
    .string()
    .nonempty({ message: "please choose a catigory to submit the product" })
    .trim()
    .refine((value) => /^[0-9a-fA-F]{24}$/.test(value), {
      message: "Invalid product ID format - must be a valid MongoDB ObjectId",
    }),
  selectedF: z
    .string()
    .nonempty({ message: "please choose a flavor to submit the product" })
    .trim()
    .refine((value) => /^[0-9a-fA-F]{24}$/.test(value), {
      message: "Invalid product ID format - must be a valid MongoDB ObjectId",
    }),
  backgroundColor: z
    .string()
    .nonempty({ message: "please pick a background color of the product" })
    .regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/i, {
      message: "should be hex color.",
    })
    .trim(),
  patternColor: z
    .string()
    .nonempty({ message: "please pick a pattern color of the product" })
    .regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/i, {
      message: "should be hex color.",
    })
    .trim(),

  img: z.string().nonempty({ message: "should have at least one letter" }),
  img2: z.string().nonempty({ message: "should have at least one letter" }),
});
export const MapFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "should have at least one letter" })
    .max(25, { message: "Name cannot exceed 25 characters" })
    .trim(),
  details: z
    .string()
    .nonempty({ message: "should give some words about it" })
    .trim(),

  img: z.string().nonempty({ message: "should have at least one letter" }),
});
export const MapLSchema = z.object({
  left: z
    .string()
    .nonempty({ message: "please pick a location of the product" })
    .regex(/^\d*\.?\d+$/, {
      message: "should be a number",
    })
    .trim(),
});
export const MapTSchema = z.object({
  top: z
    .string()
    .nonempty({ message: "please pick a location of the product" })
    .regex(/^\d*\.?\d+$/, {
      message: "should be a number",
    })
    .trim(),
});
export const VideoFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "should have at least one letter" })
    .max(25, { message: "Name cannot exceed 25 characters" })
    .trim(),
  embededLink: z
    .string()
    .nonempty({ message: "should give some words about it" })
    .regex(
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,
      "must be youtube link"
    )
    .trim(),
  coverImg: z.string().nonempty({ message: "should have at least one letter" }),
});
export const RecipeFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(25, { message: "Name cannot exceed 25 characters" })
    .trim(),
  details: z
    .string()
    .max(500, { message: "Details cannot exceed 500 characters" }),
  selectedF: z.string().min(1, { message: "Please select a flavor" }),
  code: z.string().nonempty({ message: "Code should not be empty" }).trim(),
});
export const CommentFormSchema = z.object({
  text: z
    .string()
    .max(250, { message: "Details cannot exceed 250 characters" }),
});
export const MapImgFormSchema = z.object({
  img: z.string().nonempty({ message: "should have at least one letter" }),
});
export const FlavorFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "should have at least one letter" })
    .max(25, { message: "Name cannot exceed 25 characters" })
    .trim(),

  img: z.string().nonempty({ message: "should have at least one letter" }),
});

export const SocailFormSchema = z.object({
  embededLink: z.string().nonempty({ message: "should not be empty" }).trim(),
  channelLink: z.string().nonempty({ message: "should not be empty" }).trim(),
});
export type FormSignUpState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      general?: string;
    }
  | undefined;
export type FormSocialState =
  | {
      errors?: {
        embededLink?: string[];
        channelLink?: string[];
      };
      general?: string;
      success?: boolean;
    }
  | undefined;
export type FormResetState =
  | {
      errors?: {
        password?: string[];
      };
      general?: string;
      general2?: string;
    }
  | undefined;
export type FormSignInState =
  | {
      errors?: {
        email?: string[];
      };
      password?: string[];
      general?: string;
      general2?: string;
    }
  | undefined;
export type FormCodeState =
  | {
      errors?: {
        email?: string[];
      };
      code?: string[];
      general?: string;
    }
  | undefined;
export type FormCodeVerifyState =
  | {
      errors?: {
        code1?: string[];
        code2?: string[];
        code3?: string[];
        code4?: string[];
      };
      general?: string;
      general2?: string;
    }
  | undefined;
export type FormCategoryState =
  | {
      errors?: {
        name?: string[];
        code?: string[];
        img?: string[];
        detailes?: string[];
      };
      general?: string;
      success?: boolean;
    }
  | undefined;
export type FormCommentState =
  | {
      errors?: {
        text?: string[];
      };
      general?: string;
      success?: boolean;
    }
  | undefined;
export type FormProductState =
  | {
      errors?: {
        name?: string[];
        code?: string[];
        img?: string[];
        img2?: string[];
        selectedC?: string[];
        selectedF?: string[];
        backgroundColor?: string[];
        patternColor?: string[];
        detailes?: string[];
      };
      general?: string;
      success?: boolean;
    }
  | undefined;
export type FormRecipeState =
  | {
      errors?: {
        name?: string[];
        details?: string[];
        selectedF?: string[];
        code?: string[];
      };
      general?: string;
      success?: boolean;
    }
  | undefined;

export type FormFlavorState =
  | {
      errors?: {
        name?: string[];
        img?: string[];
      };
      general?: string;
      success?: boolean;
    }
  | undefined;
export type FormFlavorSuggestState =
  | {
      user?: string;
      general?: string;
      success?: boolean;
    }
  | undefined;
export type FormVideoState =
  | {
      errors?: {
        name?: string[];
        embededLink?: string[];
        coverImg?: string[];
      };
      general?: string;
      success?: boolean;
    }
  | undefined;
export type FormMapState =
  | {
      errors?: {
        name?: string[];
        details?: string[];
        left?: string[];
        top?: string[];
        img?: string[];
      };
      general?: string;
      success?: boolean;
    }
  | undefined;
export type FormMapImageState =
  | {
      errors?: {
        img?: string[];
      };
      general?: string;
      success?: boolean;
    }
  | undefined;
export type SessionPayload = {
  userId: string;
  userRole: string;
};
export type FormAdminState =
  | {
      general?: string;
      success?: boolean;
    }
  | undefined;
