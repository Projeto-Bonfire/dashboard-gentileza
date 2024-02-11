import React from 'react';
import { AiOutlineUser, AiOutlineRocket, AiOutlineTool } from 'react-icons/ai';

import MenuNavigation from '../menuNavigation';

import { Container, Square, Text } from './styles';

const UserInformation = ({ height, situation }) => {
  let iconType = '';

  switch (situation) {
    case 'professor':
      iconType = <AiOutlineRocket size = '30px'/>;
      break;
    case 'aluno':
      iconType = <AiOutlineUser size = '30px'/>;
      break;
    default:
      iconType = <AiOutlineTool size = '30px'/>;
      break;
  }

  return (
    <Container height={height}>
      <Square>
        {iconType}
      </Square>
      <Text>
        <p>João Vitor Dutra de Souza</p>
      <MenuNavigation option={["Editar", "Copiar ID"]}/>
      </Text>
    </Container>
  );
};

export default UserInformation;
