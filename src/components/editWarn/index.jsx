import React from 'react'

import NavInformation from '../../components/navInformation';
import Description from '../../components/description';
import Button from '../../components/buttons';
import Layout from '../../components/layout';
import Label from '../../components/label';
import Input from '../../components/input';

import { Container, WarnSection } from './styles';

const EditWarn = () => {
  return (
      <Layout onLayout={(x) => x.setBackgroundPadding(true)}>
     <Container>
         <NavInformation name = 'Início do ano letivo'/>

        <WarnSection>
          <Label title = 'Titulo'/>
          <Input
            type = 'text'
            placeholder = 'Início do ano letivo'
            value = ''
          />

          <Label title = 'Descrição'/>
          <Description
            placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            value = ''
          />
        </WarnSection>
          <Button name = 'Atualização'/>

     </Container>
      </Layout>
    );
};

export default EditWarn;