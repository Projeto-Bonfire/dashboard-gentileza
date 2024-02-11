import React from 'react'
import { Container, Button } from './styles';

const Filter = ({buttonNames, select, onClick, width}) => {
  return (
          <Container>
            {buttonNames.map((name, index) => (
              <Button key={index} select={select==index} width={width} onClick={() => onClick(index)}>
                {name} 
              </Button>
            ))}
          </Container>

);
}

export default Filter;