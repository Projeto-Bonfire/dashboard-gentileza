import styled from 'styled-components';

export const Container = styled.div`
background: ${({ theme }) => theme.colors.tertiaryBackground};
height: ${({height}) => height};
justify-content: space-between;
box-sizing: border-box;
align-items: center;
border-radius: 2px;
padding-top: 4px;
display: flex;
width: 100%;

@media (max-width: 820px) {
   height: 6vh;
}
`;

export const InputElement = styled.input`
 color: ${({ theme}) =>  theme.colors.secondaryText};
 padding-left: ${({ hasIcon }) => (hasIcon ? '30px' : '10px')};
 padding-right: ${({ hasIcon }) => (hasIcon ? '30px' : '10px')};
 background: transparent;
 box-sizing: border-box;
 outline: none;
 border: none;
 height: auto;
 color: #fff;
 margin: 0;
 flex: 1;

   &:focus {
     border-color: #4caf50;
   }
   @media (max-width: 820px) {
     font-size: 12px;
   }

`;

export const IconContainer = styled.div`
place-items: center;
padding-left: 10px;
display: grid;
height: 40px;
border: none;
width: 40px;

  @media (max-width: 820px) {
  font-size: 0.1rem;
  padding-left: 6px;
  }
`;

export const IconContainerEnd = styled.div`
place-items: center;
padding-right: 8px;
display: grid;
border: none;
height: 40px;
width: 40px;

@media (max-width: 820px) {
 font-size: 0.1rem;
 padding-right: 0;
}

`;




