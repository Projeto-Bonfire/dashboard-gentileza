import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import Description from '../../components/description';
import Button from '../../components/buttons';
import Layout from '../../components/layout';
import Label from '../../components/label';
import Input from '../../components/input';
import Swal from "sweetalert2";

import { Container, InvestimentsSection} from './styles';

const CreateInvestiments = ({}) => {

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);
  
  const [description, setDescription] = useState('')
  const [percentage, setPercentage] = useState('')
  const [name, setName] = useState('')

  const createInvestiment = async () => {
    try {
      const newInvestiment = {
        name: name,
        percentage: percentage,
        description: description,
      };

      if(Object.values(newInvestiment).every((value) => value!=="")){
        await api.post('economy/investment/create', newInvestiment);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Investimento criado com sucesso!",
          showConfirmButton: false,
          timer: 1500,
          background: '#363636',  
          customClass: {
            popup: 'custom-popup-class',
            title: 'custom-title-class',
            content: 'custom-content-class',
          },
        });
        location.assign('/investiments')
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Preencha todos os campos!",
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
          console.log('Erro ao criar aviso', error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Erro ao criar investimento.",
            showConfirmButton: false,
            timer: 1500,
          });
        }  
      };
  

  
  return (
    <Layout onLayout={(x) => x.setBackgroundPadding(true)}>
   <Container>

      <InvestimentsSection>
        <Label title = 'Nome:'/>
        <Input
          type = 'text'
          placeholder = 'Bicame'
          onChange = {(value) => setName(value)}
        />

        <Label title = 'Rendimento por Dia:'/>
        <Input
          placeholder = '0.2'
          onChange = {(value) => setPercentage(value)}
        />

        <Label title = 'Descrição'/>
        <Description
          placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          onChange = {(value) => setDescription(value)}
        />
      </InvestimentsSection>
        <Button name = 'Criar' onAction = {createInvestiment}/>

   </Container>
    </Layout>
  );
};

export default CreateInvestiments;