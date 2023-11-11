import parseErrors from "@/schemes/BaseSchema";
import {z} from "zod";

export interface IEmailFormData {
  email?: string | undefined
}
const schema = z.object({
  email: z.string().email(),
});

export default function getErrors(formData: IEmailFormData) {
  return parseErrors<IEmailFormData>(schema, formData);
}