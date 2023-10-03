import { z } from "zod";

export const CreateItemSchema = z.object({
  title: z.string().nonempty({ message: "Name is required" }),
  message: z.string().nonempty({ message: "Enter extra information" }),
  colour: z.string().max(7).nonempty({ message: "Pick a colour" }),
});

export type CreateItemSchemaType = z.infer<typeof CreateItemSchema>;
