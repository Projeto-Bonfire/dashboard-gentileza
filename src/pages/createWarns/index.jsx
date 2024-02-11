import React from 'react';

import NavInformation from '../../components/navInformation';
import Description from '../../components/description';
import Button from '../../components/buttons';
import Layout from '../../components/layout';
import Label from '../../components/label';
import Input from '../../components/input';

import { Container, WarnSection } from './styles';

const createWarns = ({}) => {
  return (
    <Layout onLayout={(x) => x.setBackgroundPadding(true)}>
   <Container>
       
      <WarnSection>
        <Label title = 'Titulo'/>
        <Input
          type = 'text'
          placeholder = 'Início do ano letivo'
        />
        
        <Label title = 'Descrição'/>
        <Description
          placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
      </WarnSection>
        <Button name = 'Criar'/>
     
   </Container>
    </Layout>
  );
};

export default createWarns;