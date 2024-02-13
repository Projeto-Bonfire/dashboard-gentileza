import styled from 'styled-components'

export const MenuButton = styled.button`
background: transparent;
border: none;

outline: none;
cursor: pointer;
height: 50px;
width: 50px;
border-radius: 5px;
transition: ease .3s;
z-index: 10;


&:hover {
  backdrop-filter: brightness(120%);
}

backdrop-filter: ${({select}) => select ? 'brightness(120%)' : 'brightness(100%)'};
`

export const Menu = styled.div`
position: absolute;
overflow-y: hidden;
transition: ease-in-out .3s;
border-radius: 4px;
right: ${({inView}) => inView == true ? '80px' : '0px'};
width: 50px;
height: auto;
background: ${({inView}) => inView == true ? '#fff' : 'transparent'};

`

export const Button = styled.button`
height: auto;
width: 100%;
background: transparent;
cursor: pointer;
border: none;
padding: 5px 0;
outline: none;
transition: ease .3s;
display: ${({inView}) => inView == true ? "block" : 'none'};
&:hover {
 background: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.text};
}
`