import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthContext } from "../../Providers/AuthProvider";

interface UserData {
  username: string;
  email: string;
  password: string;
  age: number;
}

export const Login = () => {
  const { authToken, signIn } = useContext(AuthContext);
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("email required")
      .email("must be a valid e-mail"),
    password: yup
      .string()
      .required("password required")
      .min(5, "at least 5 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  const handleForm = (data: UserData) => {
    signIn(data);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleForm)}>
          <input type="text" placeholder="email" {...register("email")} />
          <input type="text" placeholder="password" {...register("password")} />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};
