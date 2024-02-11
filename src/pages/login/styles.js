import styled from 'styled-components'

export const Container = styled.div`
box-sizing: border-box;
flex-direction: column;
place-items: center;
display:grid;
height: 100vh;
width: 100vw;
padding: 15vh 30vw;

@media (max-width: 1024px) {
padding: 5vw 5%;
}
`

export const LoginContainer = styled.div`
box-sizing: border-box;
height: 100%;
width: 100%;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
padding: 10%;
gap: 15px;
justify-content: center;
background: ${({theme}) => theme.colors.secondaryBackground};

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
height: 125px;
width: 125px;
margin-bottom: 10%;
`