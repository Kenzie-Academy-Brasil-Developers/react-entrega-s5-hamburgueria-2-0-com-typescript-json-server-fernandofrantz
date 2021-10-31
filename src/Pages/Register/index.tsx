import { useContext, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthContext } from "../../Providers/AuthProvider";
import { BoxInfo, FormRegister } from "./styles";
import { Box, Container } from "./styles";
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router";

interface UserData {
  username: string;
  email: string;
  password: string;
  age: number;
}

export const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const history = useHistory();

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("nome de usuário necessário")
      .min(5, "mínimo de 5 caracteres "),
    email: yup
      .string()
      .required("e-mail necessário")
      .email("deve ser um e-mail válido"),
    password: yup
      .string()
      .required("senha necessária")
      .min(5, "mínimo de 5 caracteres"),
    age: yup.string().required("informe sua idade"),
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
        <Box>
          <p>Cadastro</p>
          <Link to="/">Retornar para login</Link>
        </Box>
        <FormRegister onSubmit={handleSubmit(handleForm)}>
          <TextField
            type="text"
            label="username"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            type="text"
            label="email"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            type="text"
            label="password"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            type="number"
            label="age"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register("age")}
            error={!!errors.age}
            helperText={errors.age?.message}
          />

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
