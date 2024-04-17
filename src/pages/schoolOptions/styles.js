import styled from 'styled-components'

export const Container = styled.div`
box-sizing: border-box;
flex-direction: column;
place-items: center;
padding: 15vh 30vw;
height: 100vh;
width: 100vw;
display:grid;

@media (max-width: 1024px) {
padding: 5vw 5%;
}

select{
  background: ${({ theme }) => theme.colors.tertiaryBackground};
  color: ${({ theme }) => theme.colors.text};
  border-style: none;
  padding: 10px;
  height: 6vh;
  width: 100%;
}

select:focus{
  outline: none;
}
`

export const LoginContainer = styled.div`
background: ${({theme}) => theme.colors.secondaryBackground};
justify-content: center;
box-sizing: border-box;
flex-direction: column;
align-items: center;
border-radius: 10px;
display: flex;
padding: 10%;
height: 100%;
width: 100%;
gap: 28px;

& > section {
  font-size: 12px;
  width: 100%;
  color: ${({theme}) => theme.colors.secondaryText};
}
`

export const Logo = styled.div`
background-image: url('../../public/images/logoBonfire.svg');
background-repeat: no-repeat;
background-position: center;
background-clip: contain;
background-color: #000;
border-radius: 50%;
margin-bottom: 5%;
height: 125px;
width: 125px;
`
