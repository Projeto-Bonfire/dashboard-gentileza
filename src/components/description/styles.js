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

& > textarea::-webkit-scrollbar {
  display: none;
}

& > textarea{
  background: ${({ theme }) => theme.colors.tertiaryBackground};
  color: ${({ theme}) =>  theme.colors.text};
  border-style: none;
  padding: 30px;
  outline: none;
  height: 30vh;
  width: 100%;

}

`;






