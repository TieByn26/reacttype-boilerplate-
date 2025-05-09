import { cva } from "class-variance-authority";
import { FieldValues } from "react-hook-form";
import { Form, FormProps } from "../../components/ui";
import { z, ZodTypeAny } from "zod";

const authFormVariants = cva("flex flex-col gap-4");

export type AuthFormProps<Schema, TFormValues extends FieldValues> = FormProps<
  Schema,
  TFormValues
> & {
  h1: string;
  h2: string;
};

export const AuthForm = <
  Schema extends ZodTypeAny,
  TFormValues extends FieldValues = z.infer<Schema>,
>({
  h1,
  h2,
  className,
  ...props
}: AuthFormProps<Schema, TFormValues>) => {
  return (
    <div className="flex w-4/5 max-w-[450px] flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">{h1}</h1>
        <h2 className="text-gray-400">{h2}</h2>
      </header>
      <Form
        className={authFormVariants({ className })}
        {...props}
      />
    </div>
  );
};
