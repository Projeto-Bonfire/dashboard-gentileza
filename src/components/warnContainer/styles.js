import styled from 'styled-components'

export const Container = styled.div`
  background: ${({theme}) => theme.colors.secondaryBackground};
  min-height: ${({height}) => height}vh;
  justify-content: space-between;
  width: ${({width}) => width}%;
  flex-direction: column;
  position: relative;
  border-radius: 5px;
  padding: 20px 25px;
  display: flex;
  height: auto;
`

export const Section = styled.div`
  flex-direction: column;
  display: flex;
  resize: none;
  width: 100%;
  flex: 1;
`

export const Data = styled.div`
  color: ${({theme}) => theme.colors.text};
  flex-direction: row;
  align-items: center;
  display: flex;
  gap: 4px;
`

export const TextArea = styled.div`
  color: ${({theme}) => theme.colors.text};
  background: transparent;
  margin-top: 10px;
  font-size: 16px;
  outline: none;
  resize: none;
  opacity: 60%;
  border: none;
  width: 75%;
  flex: 1;
`
export const Edit = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;

& > h2{
  letter-spacing: 2px;
  color: ${({theme}) => theme.colors.text};
  text-transform: capitalize;
}

`

export const MenuButton = styled.button`
background: transparent;
border: none;
position: absolute;
outline: none;
cursor: pointer;
height: 50px;
width: 50px;
border-radius: 5px;
transition: ease .3s;
z-index: 10;
top: 20px;
right: 25px;

&:hover {
  backdrop-filter: brightness(120%);
}

backdrop-filter: ${({select}) => select ? 'brightness(120%)' : 'brightness(100%)'};
`

export const Menu = styled.div`
position: relative;
transition: ease-in-out .3s;
top: 0;
right: ${({inView}) => inView == true ? '60px' : '0px'};
width: 50px;

height: 50px;
background: ${({inView}) => inView == true ? '#fff' : 'transparent'};
`