import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, ButtonContainer, OpenMenuContainer, Logout, } from './styles';
import { 
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineUserAdd,
  AiOutlineNotification,
  AiOutlineFileAdd,
  AiOutlineLogout,
  AiOutlineLineChart,
  AiOutlineFundView
} from "react-icons/ai";


const Navbar = ({openMenu, setOpenMenu}) => {


  const [select, setSelect] = useState('');
  let navigate = useNavigate();
  let isOpen = openMenu;

  const data = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      Icon: AiOutlineHome 
    },
    {
      name: 'Usuários',
      link: '/users',
      Icon: AiOutlineTeam
    },
    {
      name: 'Criar Usuário',
      link: '/create-user',
      Icon: AiOutlineUserAdd 
    },
    {
      name: 'Avisos',
      link: '/notifications',
      Icon: AiOutlineNotification 
    },
    {
      name: 'Criar Aviso',
      link: '/create-notification',
      Icon: AiOutlineFileAdd
    },
    {
      name: 'Investimentos',
      link: '/investiments',
      Icon: AiOutlineFundView
    },
    {
      name: 'Criar Investimentos',
      link: '/create-investiments',
      Icon: AiOutlineLineChart
    },
    
  ];

  const logout = () => {
     window.location.href = "/";
   }
    const OpenMenu = () => {
      return (
        <OpenMenuContainer
         isOpen={isOpen}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}>
        </OpenMenuContainer>
      )
    }

return (
        <Container isOpen={isOpen}>

          <OpenMenu/>
            {

              data.map(({Icon, name, link}, index) => (
                <ButtonContainer Icon={Icon} select={select} name={name} link={link} key={index} isOpen={isOpen} onClick={() => {
                  setSelect(name);
                  navigate(link);


                }}>
                  <Icon color={'#fafafa'} size={24}/>    
                  {isOpen ? <p>{name}</p> : ''}
                </ButtonContainer>


              ))
            }

<Logout onClick={() => logout()}><AiOutlineLogout color={'#fafafa'} size={24}/></Logout>
        </Container>


  )

}

export default Navbar;


