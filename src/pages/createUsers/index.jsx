import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Button from '../../components/buttons';
import Filter from  '../../components/filter';
import Layout from '../../components/layout';
import Input from '../../components/input';
import Label from '../../components/label';
import Swal from 'sweetalert2';



import { Container, CreateSection } from './styles';


const CreateUsers = () => {

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);
  
  const [governamentalId, setGovernamentalId] = useState('');
  const [status, setStatus] = useState(undefined);
  const [statusName, setStatusName] = useState('');
  const [role, setRole] = useState(undefined);
  const [roleName, setRoleName] = useState('');
  const [wallet, setWallet] = useState(0);
  const [name, setName] = useState('');
  
  const rolesButton = ['usuário', 'responsável', 'administrador'];
  const statusButton = ['desativado', 'não registrado', 'logado'];

  const createUser = async () => {

      try {
      if (!roleName || !statusName || !governamentalId || !name) {
        console.log('Preencha todos os campos');
      }

      const responseCheckUser = await api.get('user/admin');
      if (responseCheckUser.data.some(user => user.governamentalId === governamentalId)) {
       console.log("Usuário já existe")
      }

      const newUser = {
        role: roleName,
        status: statusName,
        governamentalId: governamentalId,
        name: name,
        wallet: wallet,
      };

      await api.post('user/admin/create-user', newUser);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Usuário criado com sucesso!",
          showConfirmButton: false,
          timer: 1500,
          background: '#363636',  
          customClass: {
            popup: 'custom-popup-class',
            title: 'custom-title-class',
            content: 'custom-content-class',
          },
        });
        location.assign('/users');


    }   catch (error) {
        
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Erro ao criar usuário.",
          showConfirmButton: false,
          timer: 1500,
          background: '#363636',  
          customClass: {
            popup: 'custom-popup-class',
            title: 'custom-title-class',
            content: 'custom-content-class',
          },
        });
    }  
  };
  
  return (
    <Layout onLayout={(x) => x.setBackgroundPadding(false)}>
    <Container>
      <CreateSection>
      <Label title = 'Tipo da conta'/>
      <Filter
        buttonNames={rolesButton}
        select={role}
        onClick={(i) => {
          setRole(i);
          const selectedRoleName = rolesButton[i];
          setRoleName(selectedRoleName);
        }}
      />
      
      <Label title = 'Status da conta'/>
      <Filter
        buttonNames={statusButton}
        select={status}
        onClick={(i) => {
          setStatus(i);
          const selectedStatusName = statusButton[i];
          setStatusName(selectedStatusName);
        }}
      />
      
      <Label title = 'Número de matrícula'/>
      <Input 
        type = 'text' 
        placeholder = 'Número de matrícula'
        onChange={(value) => setGovernamentalId(value)}
        />
      
      <Label title = 'Nome'/>
       <Input 
         type = 'text' 
         placeholder = 'João Vitor Dutra de Souza'
         onChange={(value) => setName(value)}
         />
      
      <Label title = 'Carteira'/>
      <Input 
         type = 'number' 
         placeholder = '15 gentilezas'
        onChange={(value) => setWallet(value)}
         />
        </CreateSection>
      <Button onAction={createUser}
        name = 'Criar'
        />
    </Container>
    </Layout>
  );
};

export default CreateUsers;