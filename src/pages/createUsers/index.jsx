import React, { useState, useEffect } from 'react';

import Button from '../../components/buttons';
import Filter from  '../../components/filter';
import Layout from '../../components/layout';
import Input from '../../components/input';
import Label from '../../components/label';

import { Container, CreateSection } from './styles';


const CreateUsers = () => {

  const [status, setStatus] = useState(undefined);
  const [role, setRole] = useState(undefined);
  const [statusName, setStatusName] = useState('');
  const [roleName, setRoleName] = useState('');

  const rolesButton = ['aluno', 'responsável', 'professor'];
  const statusButton = ['desativado', 'não registrado', 'logado'];
  
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
      
      <Label title = 'Email'/>
      <Input 
        type = 'email' 
        placeholder = 'joaovitor@gmail.com'
        />
      
      <Label title = 'Nome'/>
       <Input 
         type = 'text' 
         placeholder = 'João Vitor Dutra de Souza'
         />
      
      <Label title = 'Carteira'/>
      <Input 
         type = 'number' 
         placeholder = '15 gentilezas'
         />
        </CreateSection>
      <Button
        name = 'Criar'
        />
    </Container>
    </Layout>
  );
};

export default CreateUsers;