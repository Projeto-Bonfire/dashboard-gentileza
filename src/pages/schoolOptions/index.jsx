import React from "react";
import Button from "../../components/buttons";
import Label from "../../components/label";

import setAuthToken from "../../services/setAuthToken";
import api from "../../services/api";

import { Container, LoginContainer, Logo } from "./styles";
import { Form } from 'react-bootstrap';

const SchoolOptions = () => {

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);

  return (
    <Container>
      <LoginContainer>
        <Logo />
        <Label title="Escolha a escola que você deseja gerenciar:"/>
        <Form.Control as="select">
          <option>Escola Estadual João Felipe da Rocha</option>
          <option>Escola Estadual Denis Vale</option>
          <option>Escola Municipal George Chalmers</option>
        </Form.Control>
        <Button onAction={(x) =>  window.location.href = "/dashboard"} name="Escolher" />
      </LoginContainer>
    </Container>
  );
};

export default SchoolOptions;
