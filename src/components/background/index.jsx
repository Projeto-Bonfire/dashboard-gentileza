import React from 'react';
import { Background } from './styles';

const Container = ({open, padding, children}) => {

return (
  <Background open={open} padding={padding}>
    {children}
  </Background>
)

}

export default Container;