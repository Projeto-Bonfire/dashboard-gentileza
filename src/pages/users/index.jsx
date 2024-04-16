import React, { useState, useEffect } from "react";
import api from '../../services/api';

import UserInformation from '../../components/userInformation';
import Layout from '../../components/layout';
import EditUser from '../../components/editUser';
import Loader from '../../components/loader';
import Filter from '../../components/filter';
import { AiOutlineUser, AiOutlineRocket, AiOutlineTool, AiOutlineForm, AiOutlineCopy } from 'react-icons/ai';
import { Container, Options, UsersBox } from "./styles";
import Swal from 'sweetalert2';

const Users = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);
  
  const [usersList, setUsersList] = useState([]);
  const [openLayoutEdit, setOpenLayoutEdit] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [divStyle, setDivStyle] = useState({});
  const [isSelect, setIsSelect] = useState(3);
  const mapRoleToDisplay = (originalRole) => {
    const roleMappings = {
      administrador: 'administrador',
      responsavel: 'responsável',
      usuario: 'usuário'
    };

    return roleMappings[originalRole] || originalRole;
  };
  const data = [
    { icon: <AiOutlineForm/>, name: 'edit' },
    { icon: <AiOutlineCopy/>, name: 'copy' }
  ]; 
  
  // useEffect(() => {
  //     try {
  //       var response = await api.get('user/admin');
  //       setUsersList(response.data);
  //       setRemoveLoading(true);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // getAllUsers();
  // }, []);

//está dando problema 

  function CloseEdit() {
    setOpenLayoutEdit(false);
    localStorage.removeItem('editData');
  }

  const filterUser = usersList.filter((userInfos) => {
    if (isSelect === 0) {
      return mapRoleToDisplay(userInfos.role) === 'usuário';
    } else if (isSelect === 1) {
      return mapRoleToDisplay(userInfos.role) === 'responsável';
    } else if (isSelect === 2) {
      return mapRoleToDisplay(userInfos.role) === 'administrador';
    } else {
      return true;
    }
  });
  function getIconByRole(role) {
      switch (role) {
          case 'administrador':
              return <AiOutlineRocket size={24}/>;
          case 'usuário':
              return <AiOutlineUser size={24}/>;
          case 'responsável':
              return <AiOutlineTool size={24}/>;
          default:
              return null;
      }
  }
  const content = openLayoutEdit === false ? (
    <>
      <Options>
        <Filter
          height={'50px'}
          width={'100px'}
          buttonNames={['Usuários', 'Responsáveis', 'Administradores', 'Todos']}
          select={isSelect}
          onClick={(i) => setIsSelect(i)}
        />
      </Options>
    <Container>
      <UsersBox>
        { 
        filterUser.slice().reverse().map((user) => (

            <UserInformation
              key={user?.governamentalId}
              name={user?.name || "Usuário não cadastrado."}
              data={data}
              iconType={getIconByRole(user?.role)}

              onAction={(i) => {
                if (data[i].name === 'edit') {
                  localStorage.setItem('editData', user?._id);
                  setOpenLayoutEdit(true);
                } else {
                  navigator.clipboard
                    .writeText(user?._id)
                    .then(() =>
                      Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'ID copiado com sucesso',
                        showConfirmButton: false,
                        timer: 1500,
                        background: '#363636',    
                        customClass: {
                          popup: 'custom-popup-class',
                          title: 'custom-title-class',
                          content: 'custom-content-class',
                        },
                      })
                    )
                    .catch(() =>
                      Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Falha ao copiar ID',
                        showConfirmButton: false,
                        timer: 1500,
                        background: '#363636',    
                        customClass: {
                          popup: 'custom-popup-class',
                          title: 'custom-title-class',
                          content: 'custom-content-class',
                        },
                      })
                    );
                }
              }}

            />

        ))
        }
      </UsersBox>
    </Container>
      </>
  ) : (
    <EditUser onAction={CloseEdit}/>
  );

  return (
    
    <Layout onLayout={(x) => x.setBackgroundPadding(true)}>
      
        {content}
       {!removeLoading && <Loader />}
    </Layout>
  );
};

export default Users;

