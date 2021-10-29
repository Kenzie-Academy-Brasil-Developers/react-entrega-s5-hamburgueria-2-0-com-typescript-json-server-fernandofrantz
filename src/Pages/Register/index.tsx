import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthContext } from "../../Providers/AuthProvider";
import { BoxInfo, FormRegister } from "./styles";
import { Box, Container } from "./styles";
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";

interface UserData {
  username: string;
  email: string;
  password: string;
  age: number;
}

export const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("username required")
      .min(5, "min 5 characters"),
    email: yup
      .string()
      .required("email required")
      .email("must be a valid e-mail"),
    password: yup
      .string()
      .required("password required")
      .min(5, "at least 5 characters"),
    age: yup.string().required("this field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  const handleForm = (data: UserData) => {
    registerUser(data);
  };

  return (
    <>
      <Container>
        <FormRegister onSubmit={handleSubmit(handleForm)}>
          <Box>
            <p>Cadastro</p>
            <Link to="/">Retornar para login</Link>
          </Box>
          <input type="text" placeholder="username" {...register("username")} />
          <input type="text" placeholder="email" {...register("email")} />
          <input type="text" placeholder="password" {...register("password")} />
          <input type="number" placeholder="age" {...register("age")} />
          <button type="submit">submit</button>
        </FormRegister>
        <BoxInfo>
          <BsFillBagFill />
          <span>
            A vida é como um sanduíche, é preciso recheá-la com os
            <b> melhores </b>
            ingredientes.
          </span>
        </BoxInfo>
      </Container>
    </>
  );
};
