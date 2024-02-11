import React, {useState} from 'react';

import { Container, IconContainer, InputElement, IconContainerEnd } from './styles';


const Input = ({Icon, placeholder, ActionIcon, type, onChange, value, height = '7vh'}) => {

  const [valueInput, setValueInput] = useState(ActionIcon ? 'password' : 'text');

  const hangleChange = (event) => {
    setValueInput(event.target.value)
  };

  return(
      <Container height={height}>
        {
          Icon && (
            <IconContainer>
                <Icon color='#eeeeee' size={20}/>
            </IconContainer>
          )
        }

        <InputElement
          value={value}
          type={valueInput}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          hasIcon={Icon !== ''}      
        />

        {
          ActionIcon && (
            <IconContainerEnd>
                <ActionIcon onClick={() => setValueInput(valueInput === 'text' ? 'password' : 'text')} color='#eeeeee' size={20}/>
            </IconContainerEnd>
          )
        }

      </Container>
  )
}


export default Input