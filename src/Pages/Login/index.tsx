import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthContext } from "../../Providers/AuthProvider";
import { BsFillBagFill } from "react-icons/bs";
import { useHistory } from "react-router";
import { Box, Container, FormLogin, Title } from "./styles";
import { TextField } from "@material-ui/core";

interface FormLoginData {
  email: string;
  password: string;
}

export const Login = () => {
  const { signIn } = useContext(AuthContext);
  const history = useHistory();
  const formSchema = yup.object().shape({
    email: yup.string().required("informe seu e-mail"),
    password: yup.string().required("informe sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginData>({ resolver: yupResolver(formSchema) });

  const handleForm = (data: FormLoginData) => {
    signIn(data);
  };

  return (
    <>
      <Container>
        <div className="secaoInicial">
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
        </div>

        <FormLogin onSubmit={handleSubmit(handleForm)}>
          <h2>Login</h2>
          <TextField
            type="text"
            label="E-mail"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            type="password"
            label="Senha"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
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
