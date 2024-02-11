import React from 'react'
import {Container, Button} from './styles';
import {AiOutlineCaretLeft} from 'react-icons/ai';

const NavInformation = ({name, onAction}) => {
  return (
    <Container>
    <Button onClick={() => onAction()}><AiOutlineCaretLeft color='#fff' size={24}/></Button>
     <h2>{name}</h2>
    </Container>
  );
};

export default NavInformation;