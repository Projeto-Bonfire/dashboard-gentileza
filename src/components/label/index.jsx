import React from 'react'
import { Container } from './styles';

const Label = ({title, height, width}) => {
  return (
    <Container height={height} width={width}>
      {title}
    </Container>
  )
}

export default Label;