import { z } from "zod";

export const CreateItemSchema = z.object({
  title: z.string().nonempty({ message: "Name is required" }),
  message: z.string().nonempty({ message: "Enter extra information" }),
  textColour: z.string().max(8).nonempty({ message: "Pick a colour" }),
  bgColour: z.string().max(8).nonempty({ message: "Pick a colour" }),
});

export type CreateItemSchemaType = z.infer<typeof CreateItemSchema>;
