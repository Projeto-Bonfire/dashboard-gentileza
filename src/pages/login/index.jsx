import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/buttons";
import { Container, LoginContainer, Logo } from "./styles";
import { FaUser, FaLock, FaEye } from "react-icons/fa";
import api from "../../services/api";
import setAuthToken from "../../services/setAuthToken";
import Swal from "sweetalert2";

const Login = () => {
  const [pass, setPass] = useState("");
  const [user, setUser] = useState({ governamentalId: "", password: "" });

  const sendData = async () => {
    try {
      if (user.governamentalId === "" || user.password === "") {
        return setPass("Preencha ambos os campos de usuário e senha.");
      }

      const response = await api.post("/user/signin", user);
      const token = response.data.token;
      setAuthToken(token);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login realizado com sucesso.",
        showConfirmButton: false,
        timer: 1500,
        background: "#363636",
        textColor: "#EEEEEE",
        customClass: {
          popup: "custom-popup-class",
          title: "custom-title-class",
          content: "custom-content-class",
        },
      });
      window.location.href = "/dashboard";
    } catch (error) {
      console.log(error);
      setPass("Usuário inválido.");
    }
  };

  return (
    <Container>
      <LoginContainer>
        <Logo />
        <Input
          placeholder="Usuário"
          type="text"
          Icon={FaUser}
          onChange={(governamentalId) => setUser({ ...user, governamentalId })}
        />
        <Input
          placeholder="Senha"
          type="password"
          Icon={FaLock}
          ActionIcon={FaEye}
          onChange={(password) => setUser({ ...user, password })}
        />
        <section>{pass}</section>
        <Button onAction={(x) => sendData()} name="entrar" />
      </LoginContainer>
    </Container>
  );
};

export default Login;
