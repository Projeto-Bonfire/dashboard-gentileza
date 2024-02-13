import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Description from '../../components/description';
import Button from '../../components/buttons';
import Layout from '../../components/layout';
import Label from '../../components/label';
import Input from '../../components/input';
import Swal from "sweetalert2";

import { Container, WarnSection } from './styles';

const CreateWarns = ({}) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);
  
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const createWarn = async () => {
    try {
      const newWarn = {
        title: title,
        description: description,
      };

      if (Object.values(newWarn).every((value) => value !== "")) {
        await api.post('warn/create', newWarn);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Aviso criado com sucesso!",
          showConfirmButton: false,
          timer: 1500,
          background: '#363636',  
          customClass: {
            popup: 'custom-popup-class',
            title: 'custom-title-class',
            content: 'custom-content-class',
          },
        });
        location.assign('/notifications')

      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Preencha todos os campos",
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

    } catch (error) {
      
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Erro ao criar aviso.",
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
    <Layout onLayout={(x) => x.setBackgroundPadding(true)}>
   <Container>
       
      <WarnSection>
        <Label title = 'Titulo'/>
        <Input
          type = 'text'
          placeholder = 'Início do ano letivo'
          onChange={(value) => setTitle(value)}
        />
        
        <Label title = 'Descrição'/>
        <Description
          placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          onChange={(value) => setDescription(value)}
        />
      </WarnSection>
        <Button name = 'Criar' onAction={createWarn}/>
     
   </Container>
    </Layout>
  );
};

export default CreateWarns;