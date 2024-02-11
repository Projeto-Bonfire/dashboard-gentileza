import styled from 'styled-components'

export const Container = styled.div`
  width: ${({isOpen}) => isOpen ? '250px' : '100px'};
  border-right: 1px solid rgba(255, 255, 255, .3);
  background-color: rgba(54, 54, 54, 1);
  flex-direction: column;
  box-sizing: border-box;
  transition: .3s ease;
  align-items: center;
  padding: 30px 15px;
  display: flex;
z-index: 10;
  height: 100%;
  gap: 5px;

@media (max-width: 414px) {
  height: 40px;
  overflow-y: hidden;
  width: 100%;
  flex-direction: row;

position: absolute;
top: 0;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}
  `

export const ButtonContainer = styled.button`		
  width: ${({isOpen}) => isOpen ? '220px' : '66.5px'};
  backdrop-filter: ${({select, name}) => select == name ? 
  'brightness(120%)' : 'brightness(100%)'};
  background-color: transparent;
  transition: ease .3s;
  align-items: center;
  padding: 21px 21px;
  border-radius: 5px;
  display: flex;


  border: none;
  cursor: pointer;
  gap: 15px;

  &:hover {
    backdrop-filter: brightness(120%);
  }
`

export const Logout = styled.button`
width: ${({isOpen}) => isOpen ? '220px' : '66.5px'};
backdrop-filter: ${({isSelect}) => isSelect ? 
'brightness(120%)' : 'brightness(100%)'};
background-color: transparent;
transition: ease .3s;
place-items: center;
padding: 13px 21px;
border-radius: 5px;
display: grid;
heigth: 50px;
border: none;
cursor: pointer;
gap: 13px;

&:hover {
  backdrop-filter: brightness(120%);
}
`

export const OpenMenuContainer = styled.button`
  background-image: url('../../public/images/logoBonfire.svg');
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-clip: contain;
  background-size: 150%;
  transition: ease 0.3s;
  margin-bottom: 15px;
  cursor: pointer;
  border: none;
  height: 60px;
  width: 60px;

  &:hover {
    opacity: 85%;
  }
  `