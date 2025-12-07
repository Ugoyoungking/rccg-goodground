"use server";

import { z } from "zod";
import { generateSermonSummary } from "@/ai/flows/sermon-summary-generation";

export type FormState = {
  message: string;
  summary?: string;
  excerpt?: string;
};

const SermonSchema = z.object({
  sermonText: z.string().min(50, { message: "Sermon text must be at least 50 characters long." }),
});

export async function handleSermonSubmission(
  prevState: FormState,
  formData: FormData
) {
  const validatedFields = SermonSchema.safeParse({
    sermonText: formData.get("sermonText"),
  });

  if (!validatedFields.success) {
    return {
      message: "Error: " + validatedFields.error.flatten().fieldErrors.sermonText?.join(", "),
    };
  }
  
  try {
    const { sermonText } = validatedFields.data;
    const result = await generateSermonSummary({ sermonText });

    if (result.summary && result.excerpt) {
      return {
        message: "success",
        summary: result.summary,
        excerpt: result.excerpt,
      };
    } else {
      return { message: "Error: AI generation failed. Please try again." };
    }
  } catch (e) {
    console.error(e);
    return { message: "Error: An unexpected error occurred." };
  }
}
