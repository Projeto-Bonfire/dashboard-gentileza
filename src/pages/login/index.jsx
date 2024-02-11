import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/buttons";
import { Container, LoginContainer, Logo } from "./styles";
import { FaUser, FaLock, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const [pass, setPass] = useState("");
  const [user, setUser] = useState({ email: "", password: "" });
 const login = () => {
   window.location.href = "/dashboard";
 }
  return (
    <Container>
      <LoginContainer>
        <Logo />
        <Input
          placeholder="Email"
          Icon={FaUser}
          onChange={(email) => setUser({ ...user, email })}
        />
        <Input
          placeholder="Senha"
          type="password"
          Icon={FaLock}
          ActionIcon={FaEye}
          onChange={(password) => setUser({ ...user, password })}
        />
        <section>{pass}</section>
        <Button onAction={() => login()} name="entrar" />
      </LoginContainer>
    </Container>
  );
};

export default Login;
