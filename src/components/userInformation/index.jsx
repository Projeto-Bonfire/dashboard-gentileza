import React from 'react';
import { AiOutlineUser, AiOutlineRocket, AiOutlineTool } from 'react-icons/ai';
import MenuNavigation from '../menuNavigation';

import { Container, Square, Text } from './styles';

const UserInformation = ({ height, name, data, onAction, iconType}) => {


 


  return (
    <Container height={height}>
      <Square>
        {iconType}
      </Square>
      <Text>
        <p>{name}</p>
      <MenuNavigation option={data} onAction={onAction} />
      </Text>
    </Container>
  );
};

export default UserInformation;
