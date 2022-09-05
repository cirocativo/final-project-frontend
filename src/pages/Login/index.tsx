import { useContext } from "react";
import { ILoginDataProps, UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validators/schemas";

import { Header } from "../../components/Header";

import { Button, InputLabel } from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

import { Container } from "./styles";
import { ButtonLogin } from "../../components/ButtonLoginDesktop";
import { TitlesH1 } from "../../components/Titles/styles";
import { ButtonLoginMob } from "../../components/ButtonLoginMobile/styles";

interface State {
  password: string;
  showPassword: boolean;
}

export const Login = () => {
  const [values, setValues] = useState<State>({
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { toRegister, loginData } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginDataProps>({ resolver: yupResolver(schemaLogin) });

  return (
    <Container>
      <Header></Header>

      <form className="formLogin" onSubmit={handleSubmit(loginData)}>
        <TitlesH1>Login</TitlesH1>

        {window.innerWidth > 540 ? (
          <>
            <TextField
              sx={{ ml: 3, mt: 3, width: "50ch" }}
              label="E-mail"
              id="outlined-basic"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              {...register("email")}
            />
            <p>{errors.email?.message}</p>

            <FormControl sx={{ ml: 3, width: "50ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-basic">Senha</InputLabel>
              <OutlinedInput
                label="Senha"
                id="outlined-basic"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...register("password")}
                onChange={handleChange("password")}
              />
            </FormControl>
            <p>{errors.password?.message}</p>

            <ButtonLogin type="submit" onClick={() => handleSubmit}>
              Entrar
            </ButtonLogin>

            <p className="pMsgReg">Você ainda não possui uma conta?</p>

            <ButtonLogin onClick={() => toRegister()} type="submit">
              Cadastre-se
            </ButtonLogin>
          </>
        ) : (
          <>
            <TextField
              sx={{ ml: 3, mt: 3, width: "35ch" }}
              label="E-mail"
              id="outlined-basic"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
            <FormControl sx={{ ml: 3, width: "35ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-basic">Senha</InputLabel>
              <OutlinedInput
                label="Password"
                id="outlined-basic"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...register("password")}
                onChange={handleChange("password")}
              />
            </FormControl>
            <p>{errors.password?.message}</p>

            <ButtonLoginMob type="submit" onClick={() => handleSubmit}>
              Entrar
            </ButtonLoginMob>

            <p className="pMsgReg">Você ainda não possui uma conta?</p>

            <ButtonLoginMob onClick={() => toRegister()} type="submit">
              Cadastre-se
            </ButtonLoginMob>
          </>
        )}
      </form>
    </Container>
  );
};
