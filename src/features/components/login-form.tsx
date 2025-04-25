import { Button } from "../../components/ui";
import { Input } from "../../components/ui";
import { Link } from "react-router-dom";
import { loginInputSchema, useLogin } from "../api/login";
import { AuthForm } from "./auth-form";

export const LoginForm = () => {
  const fetchLogin = useLogin();

  return (
    <AuthForm
      h1="Welcome 👋"
      h2="Please login here"
      schema={loginInputSchema}
      onSubmit={(data) => {
        fetchLogin.mutate(data);
      }}
    >
      {({ register, formState }) => (
        <>
          <Input
            label="Email"
            register={register("email")}
            error={formState.errors.email}
          />
          <Input
            label="Password"
            type="password"
            register={register("password")}
            error={formState.errors.password}
          />
          <Button
            size={"lg"}
            className="mt-4"
            type="submit"
          >
            Login
          </Button>
          <div className="flex items-center justify-center gap-1">
            {"Don't have an account? "}
            <Link to={"/auth/register"}>Register</Link>
          </div>
        </>
      )}
    </AuthForm>
  );
};