import { z } from "zod";

const bilingualMessage = (en: string, ar: string) => `${en} / ${ar}`;
export const SignupFormSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: bilingualMessage("Name is required", "الاسم مطلوب"),
    })
    .trim()
    .min(2, {
      message: bilingualMessage(
        "Name should be at least 2 characters long",
        "يجب أن يحتوي الاسم على حرفين على الأقل",
      ),
    })
    .max(25, {
      message: bilingualMessage(
        "Name cannot exceed 25 characters",
        "لا يمكن أن يتجاوز الاسم ٢٥ حرفاً",
      ),
    }),
  email: z
    .string()
    .email({
      message: bilingualMessage(
        "Please enter a valid email",
        "من فضلك أدخل ايميل صحيح",
      ),
    })
    .trim(),
  password: z
    .string()
    .min(8, {
      message: bilingualMessage(
        "Be at least 8 characters long",
        "تكون على الأقل ثمانية محارف",
      ),
    })
    .max(25, {
      message: bilingualMessage(
        "Be at most 25 characters long",
        "تكون على الأكثر 25 محرف",
      ),
    })
    .regex(/[a-zA-Z]/, {
      message: bilingualMessage(
        "conatines at least one letter",
        "تحتوي على الأقل حرف واحد",
      ),
    })
    .regex(/[0-9]/, {
      message: bilingualMessage(
        "conatines at least one number",
        "تحتوي على الأقل رقم واحد",
      ),
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: bilingualMessage(
        "conatines at least one special charechter",
        "تحتوي على الأقل محرف خاص واحد",
      ),
    }),
});

export const SigninFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
});
export const resetFormSchema = z.object({
  password: z
    .string()
    .min(8, {
      message: bilingualMessage(
        "Be at least 8 characters long",
        "تكون على الأقل ثمانية محارف",
      ),
    })
    .max(25, {
      message: bilingualMessage(
        "Be at most 25 characters long",
        "تكون على الأكثر 25 محرف",
      ),
    })
    .regex(/[a-zA-Z]/, {
      message: bilingualMessage(
        "conatines at least one letter",
        "تحتوي على الأقل حرف واحد",
      ),
    })
    .regex(/[0-9]/, {
      message: bilingualMessage(
        "conatines at least one number",
        "تحتوي على الأقل رقم واحد",
      ),
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: bilingualMessage(
        "conatines at least one special charechter",
        "تحتوي على الأقل محرف خاص واحد",
      ),
    }),
});
export const CodeFormSchema = z.object({
  code1: z
    .number()
    .min(0, bilingualMessage("No less than 0 ", " لبس أقل من صفر"))
    .max(9, bilingualMessage("No more than 9 ", " ليس أكثر من تسعة"))
    .int(bilingualMessage("Must be an integer ", " يحب أن تدخل أرقام")),
  code2: z
    .number()
    .min(0, bilingualMessage("No less than 0 ", " لبس أقل من صفر"))
    .max(9, bilingualMessage("No more than 9 ", " ليس أكثر من تسعة"))
    .int(bilingualMessage("Must be an integer ", " يحب أن تدخل أرقام")),
  code3: z
    .number()
    .min(0, bilingualMessage("No less than 0 ", " لبس أقل من صفر"))
    .max(9, bilingualMessage("No more than 9 ", " ليس أكثر من تسعة"))
    .int(bilingualMessage("Must be an integer ", " يحب أن تدخل أرقام")),
  code4: z
    .number()
    .min(0, bilingualMessage("No less than 0 ", " لبس أقل من صفر"))
    .max(9, bilingualMessage("No more than 9 ", " ليس أكثر من تسعة"))
    .int(bilingualMessage("Must be an integer ", " يحب أن تدخل أرقام")),
});

export const CategoryFormSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: bilingualMessage("Name is required", "الاسم مطلوب"),
    })
    .trim()
    .max(25, {
      message: bilingualMessage(
        "Name cannot exceed 25 characters",
        "لا يمكن أن يتجاوز الاسم ٢٥ حرفاً",
      ),
    }),

  code: z
    .string()
    .nonempty({
      message: bilingualMessage("Code is required", "الكود مطلوب"),
    })
    .trim(),

  detailes: z
    .string()
    .nonempty({
      message: bilingualMessage("Details are required", "التفاصيل مطلوبة"),
    })
    .trim()
    .max(250, {
      message: bilingualMessage(
        "Details cannot exceed 250 characters",
        "لا يمكن أن تتجاوز التفاصيل ٢٥٠ حرفاً",
      ),
    }),

  img: z.string().nonempty({
    message: bilingualMessage("Image URL is required", "رابط الصورة مطلوب"),
  }),
});
export const ProductFormSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: bilingualMessage("Name is required", "الاسم مطلوب"),
    })
    .trim()
    .max(25, {
      message: bilingualMessage(
        "Name cannot exceed 25 characters",
        "لا يمكن أن يتجاوز الاسم ٢٥ حرفاً",
      ),
    }),

  detailes: z
    .string()
    .nonempty({
      message: bilingualMessage("Details are required", "التفاصيل مطلوبة"),
    })
    .trim()
    .max(250, {
      message: bilingualMessage(
        "Details cannot exceed 250 characters",
        "لا يمكن أن تتجاوز التفاصيل ٢٥٠ حرفاً",
      ),
    }),

  img: z.string().nonempty({
    message: bilingualMessage("Image URL is required", "رابط الصورة مطلوب"),
  }),
  code: z
    .string()
    .nonempty({
      message: bilingualMessage("code is required", "الكود مطلوب"),
    })
    .trim(),
  selectedC: z
    .string()
    .nonempty({
      message: bilingualMessage(
        "please choose a catigory to submit the product",
        "من فضلك اختر صنف لإرسال المنتج",
      ),
    })
    .trim()
    .refine((value) => /^[0-9a-fA-F]{24}$/.test(value), {
      message: bilingualMessage(
        "Invalid product ID format - must be a valid MongoDB ObjectId",
        "صيغة مفتاح المنتج خاطئة - يجب أن يكون من صيغة مفتاح المونغو",
      ),
    }),
  selectedF: z
    .string()
    .nonempty({
      message: bilingualMessage(
        "please choose a flavor to submit the product",
        "من فضلك اختر صنف لإرسال النكهة",
      ),
    })
    .trim()
    .refine((value) => /^[0-9a-fA-F]{24}$/.test(value), {
      message: bilingualMessage(
        "Invalid product ID format - must be a valid MongoDB ObjectId",
        "صيغة مفتاح المنتج خاطئة - يجب أن يكون من صيغة مفتاح المونغو",
      ),
    }),
  backgroundColor: z
    .string()
    .nonempty({
      message: bilingualMessage(
        "please pick a background color of the product",
        "من فضلك اختر لون خلفية للمنتج",
      ),
    })
    .regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/i, {
      message: bilingualMessage(
        "should be a hex color",
        "يجب أن يكون بصيغة hex",
      ),
    })
    .trim(),
  patternColor: z
    .string()
    .nonempty({
      message: bilingualMessage(
        "please pick a pattern color of the product",
        "من فضلك اختر لون نمط للمنتج",
      ),
    })
    .regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/i, {
      message: bilingualMessage(
        "should be a hex color",
        "يجب أن يكون بصيغة hex",
      ),
    })
    .trim(),
  img2: z.string().nonempty({
    message: bilingualMessage("Image URL is required", "رابط الصورة مطلوب"),
  }),
});
export const MapFormSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: bilingualMessage("Name is required", "الاسم مطلوب"),
    })
    .trim()
    .max(25, {
      message: bilingualMessage(
        "Name cannot exceed 25 characters",
        "لا يمكن أن يتجاوز الاسم ٢٥ حرفاً",
      ),
    }),
  details: z
    .string()
    .nonempty({
      message: bilingualMessage("Details are required", "التفاصيل مطلوبة"),
    })
    .trim()
    .max(250, {
      message: bilingualMessage(
        "Details cannot exceed 250 characters",
        "لا يمكن أن تتجاوز التفاصيل ٢٥٠ حرفاً",
      ),
    }),

  img: z.string().nonempty({
    message: bilingualMessage("Image URL is required", "رابط الصورة مطلوب"),
  }),
});
export const MapLSchema = z.object({
  left: z
    .string()
    .nonempty({
      message:
        "Please pick a location on the map / من فضلك اختر موقعا على الخريطة",
    })
    .regex(/^\d*\.?\d+$/, {
      message: "Should be a number / يجب أن يكون رقم",
    })
    .trim(),
});
export const MapTSchema = z.object({
  top: z
    .string()
    .nonempty({
      message:
        "Please pick a location on the map / من فضلك اختر موقعا على الخريطة",
    })
    .regex(/^\d*\.?\d+$/, {
      message: "Should be a number / يجب أن يكون رقم",
    })
    .trim(),
});
export const VideoFormSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: bilingualMessage("Name is required", "الاسم مطلوب"),
    })
    .max(25, { message: "Name cannot exceed 25 characters" })
    .trim(),
  embededLink: z
    .string()
    .nonempty({
      message: bilingualMessage("Link are required", "الرابط مطلوبة"),
    })
    .regex(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/, {
      message: bilingualMessage(
        "should be youtube link",
        "يجب أن يكون رابط يوتيوب ",
      ),
    })
    .trim(),
  coverImg: z.string().nonempty({
    message: bilingualMessage("Image URL is required", "رابط الصورة مطلوب"),
  }),
});
export const RecipeFormSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: bilingualMessage("Name is required", "الاسم مطلوب"),
    })
    .max(25, { message: "Name cannot exceed 25 characters" })
    .trim(),
  details: z
    .string()
    .nonempty({
      message: bilingualMessage("Details are required", "التفاصيل مطلوبة"),
    })
    .trim()
    .max(500, {
      message: bilingualMessage(
        "Details cannot exceed 500 characters",
        "لا يمكن أن تتجاوز التفاصيل 500 حرفاً",
      ),
    }),
  selectedF: z
    .string()
    .nonempty({
      message: bilingualMessage(
        "flavor selection is required",
        "يجب اختيار نكهة مطلوب",
      ),
    })
    .trim(),
  code: z
    .string()
    .nonempty({
      message: bilingualMessage("Code is required", "يجب اختيار رمز للوصفة"),
    })
    .trim(),
});
export const CommentFormSchema = z.object({
  text: z.string().max(250, {
    message: bilingualMessage(
      "Details cannot exceed 250 characters",
      "لا يمكن أن تتجاوز التفاصيل ٢٥٠ حرفاً",
    ),
  }),
});

export const FlavorFormSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: bilingualMessage("Name is required", "الاسم مطلوب"),
    })
    .trim()
    .max(25, {
      message: bilingualMessage(
        "Name cannot exceed 25 characters",
        "لا يمكن أن يتجاوز الاسم ٢٥ حرفاً",
      ),
    }),
  img: z.string().nonempty({
    message: bilingualMessage("Image URL is required", "رابط الصورة مطلوب"),
  }),
});

export const SocailFormSchema = z.object({
  embededLink: z
    .string()
    .nonempty({
      message: bilingualMessage(
        "Embedded link is required",
        "الرابط المضمن مطلوب",
      ),
    })
    .trim(),
  channelLink: z
    .string()
    .nonempty({
      message: bilingualMessage(
        "Channel link is required",
        "رابط القناة مطلوب",
      ),
    })
    .trim(),
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
      messageEn?: string;
      messageAr?: string;
      status?: number;
    }
  | undefined;
