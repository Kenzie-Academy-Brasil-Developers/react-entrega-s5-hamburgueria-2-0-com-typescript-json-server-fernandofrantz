import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthContext } from "../../Providers/AuthProvider";
import { BsFillBagFill } from "react-icons/bs";
import { useHistory } from "react-router";
import { Box, Container, FormLogin, Title } from "./styles";

interface UserData {
  username: string;
  email: string;
  password: string;
  age: number;
}

export const Login = () => {
  const { authToken, signIn } = useContext(AuthContext);
  const history = useHistory();
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
      <Container>
        <Title>
          <h1 className="titleBurguer">Burguer</h1>
          <h4 className="titleKenzie">Kenzie</h4>
        </Title>
        <Box>
          <BsFillBagFill />
          <span>
            A vida é como um sanduíche, é preciso recheá-la com os melhores
            ingredientes.
          </span>
        </Box>
        <FormLogin onSubmit={handleSubmit(handleForm)}>
          <h2>Login</h2>
          <input type="text" placeholder="E-mail" {...register("email")} />
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <button className="buttonSubmit" type="submit">
            Login
          </button>
          <span>
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </span>
          <button
            className="buttonRegister"
            type="button"
            onClick={() => history.push("/register")}
          >
            Registrar-se
          </button>
        </FormLogin>
      </Container>
    </>
  );
};
