import styled from 'styled-components';

export const Container = styled.div`
justify-content: space-between;
align-items: center;
margin: 0 auto;
display: flex;

width: 80%;

@media(max-width: 414px) {
  margin-top: 60px;
}
}

& > h2 {
  color: ${({theme}) => theme.colors.text};
  padding: 0 5px;
  text-transform: capitalize;
}
`
export const Button = styled.button`
background: transparent;
transition: ease .3s;
place-items: center;
cursor: pointer;
display: grid;
border: none;
height: 50px;
width: 50px;

&:hover {
  opacity: 85%;
}


`