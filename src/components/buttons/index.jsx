import React, { useState } from 'react';
import { ButtonContainer} from './styles';

const Button = ({name, secondary, onAction, width, height='15', margin}) => {
    return(
      <ButtonContainer 
        secondary={secondary} 
        width={width}
        height={height}
        onClick={() => onAction()}
      >
        {name}
      </ButtonContainer>
    )
}

export default Button;
