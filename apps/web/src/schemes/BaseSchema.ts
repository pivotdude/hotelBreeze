import {z} from "zod";

export default function parseErrors<T>(schema: z.ZodObject<{[key: string]: any}>, formData: T) {
  try {
    schema.parse(formData);
    return {}
  } catch (e: unknown) {
    if (e instanceof z.ZodError) {
      const errorObject = e.issues.reduce((acc, error) => {
        const path = error.path.join('.');
        // @ts-ignore
        acc[path] = error.message;
        return acc;
      }, {}) as T[];
      return errorObject as T[];
    }
  }
}
