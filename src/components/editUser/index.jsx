import React from 'react'

    import NavInformation from './components/navInformation'
    import Button from './components/buttons';
    import Filter from  './components/filter';
    import Layout from './components/layout';
    import Input from './components/input';
    import Label from './components/label';

    import { Container, EditSection } from './styles';

const EditUser = () => {
  
      return (
        <Layout onLayout={(x) => x.setBackgroundPadding(false)}>
        <Container>
          <NavInformation name = 'João Vitor Dutra de Souza'/>
          <EditSection>
          <Label title = 'Tipo da conta'/>
          <Filter
            buttonNames = {['aluno', 'responsável', 'professor']}
          />

          <Label title = 'Status da conta'/>
          <Filter
            buttonNames = {['desativado', 'não registrado', 'logado']}
          />

          <Label title = 'Email'/>
          <Input 
            type = 'email' 
            placeholder = 'joaovitor@gmail.com'
            value = ''
            />

          <Label title = 'Nome'/>
           <Input 
             type = 'text' 
             placeholder = 'João Vitor Dutra de Souza'
             value = ''
             />

          <Label title = 'Carteira'/>
          <Input 
             type = 'number' 
             placeholder = '15 gentilezas'
             value = ''
             />
            </EditSection>
          <Button
            name = 'Atualizar'
            />
        </Container>
        </Layout>
      );
    };

export default EditUser;