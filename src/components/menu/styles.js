import styled from 'styled-components'

export const Container = styled.div`

  justify-content: ${({isOpen}) => isOpen ? 'start' : 'center'};
  align-items: ${({isOpen}) => isOpen ? 'start' : 'center'};
  width: ${({isOpen}) => isOpen ? '250px' : '50px'};
  height: ${({isOpen}) => isOpen ? '75%' : '50px'};
  padding: ${({isOpen}) => isOpen ? '15px' : '0'};
  color:${({theme}) => theme.colors.text};
  transition: .3s ease-in-out;
  flex-direction: column;
  background: #363636;
  overflow-x: auto;
  overflow-y: auto;
  position: fixed;
  display: flex;

  &::-webkit-scrollbar {
    display: none;
  }

 & > section {
   padding-bottom: 25px;
   align-items: center;
   flex-direction: row;
   display: flex;
   width: 100%;
   gap: 10px;
 }

 & > section > div {
   flex-direction: column;
   align-items: end;
   display: flex;
   width: 60%;
   gap: 5px;
 }

  @media (max-width: 414px) {
    width: ${({isOpen}) => isOpen ? '100%' : '60px'};
  }
  `
export const CloseMenu = styled.button `
background: transparent;
cursor: pointer;
border: none;
height: 50px;
width: 50px; 
`

export const DropdownSchool = styled.select`
color:${({theme}) => theme.colors.text};
background: transparent;
cursor: pointer;
outline: none;
border: none;
width: auto;

& > option {
  background-color: #363636;
  outline: none;
  border: none;
}
`

export const Config = styled.div`
background: transparent;
cursor: pointer;
border: none;
`

