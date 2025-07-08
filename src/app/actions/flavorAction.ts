"use server";

import {
  AddFlavor,
  deleteFlavor,
  updateFlavor,
} from "../data-access-layer/flavorDAL";
import { writeFile } from "fs/promises";
import {
  FlavorFormSchema,
  FormFlavorState,
  FormFlavorSuggestState,
} from "../lib/definitions";
import { redirect } from "next/dist/server/api-utils";
import { getSession } from "../lib/session";
import { Resend } from "resend";
import { EmailFlavorTemplate } from "../ui/SuggestFlavorEmailTemplate";

export async function AddFlavorAction(
  state: FormFlavorState,
  formData: FormData
): Promise<FormFlavorState> {
  try {
    // Validate required fields
    const requiredFields = ["name", "img"];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return {
          errors: {
            [field]: ["This field is required"],
          },
        };
      }
    }

    // Parse and validate form data
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

    // Handle image uploads

    // Add flavor to database
    const { status, message } = await AddFlavor(name, img, language);

    if (status === 409) {
      return { errors: { name: [message] } };
    }

    if (status !== 201) {
      return { general: message };
    }

    return { success: true };
  } catch (error) {
    console.error("Error in AddFlavorAction:", error);
    return {
      general: "An unexpected error occurred. Please try again later.",
    };
  }
}
export async function UpdateFlavorAction(
  state: FormFlavorState,
  formData: FormData
): Promise<FormFlavorState> {
  try {
    // Validate required fields
    const requiredFields = ["id", "name", "img", "language"];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return {
          errors: {
            [field]: ["This field is required"],
          },
        };
      }
    }

    // Parse and validate form data
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

    // Handle image uploads

    // Add category to database
    const { status, message } = await updateFlavor({
      id: id,
      name: name,
      primaryImg: img,
      lang: language,
    });

    if (status === 404) {
      return { errors: { name: [message] } };
    }

    if (status !== 200) {
      return { general: message };
    }

    return { success: true };
  } catch (error) {
    console.error("Error in AddCategoryAction:", error);
    return {
      general: "An unexpected error occurred. Please try again later.",
    };
  }
}
export async function DeleteFlavorAction(
  deleteAll: string,
  selectedField: any
) {
  try {
    // Validate required fields
    const { status } = await deleteFlavor(
      deleteAll === "on" ? true : false,
      selectedField
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
  formData: FormData
) {
  try {
    const user = await getSession();

    if (user.success === false || !user.user)
      return {
        success: false,
        user: "faild to find user",
      };
    // Validate required fields
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_CO!,
      subject: "Flavor suggestion",
      react: EmailFlavorTemplate({
        userName: user.user.name,
        userEmail: user.user?.email,
        text: formData.get("details") as string,
      }),
    });
    if (error) {
      return { success: false, general: "failed to send email" };
    } else {
      return { success: true };
    }
  } catch (error) {
    return { success: false, general: "failed to send email" };
  }
}
