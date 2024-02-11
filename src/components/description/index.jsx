 import React from 'react';
 import { Container} from './styles';

 const Description = ({onChange, value, height, placeholder}) => {
  return (
      <Container height={height}>
          <textarea
              value={value}
              placeholder={placeholder}
              onChange={(e) => onChange(e.target.value)}
         />
        
     </Container>
  
  );
 };

export default  Description;