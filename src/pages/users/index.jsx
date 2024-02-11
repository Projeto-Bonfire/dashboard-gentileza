import React, { useState, useEffect } from "react";

import UserInformation from '../../components/userInformation';
import Layout from '../../components/layout';
import Filter from '../../components/filter';

import { Container, Options, UsersBox } from "./styles";

const Users = () => {
  const [usersList, setUsersList] = useState([]);
  const [openLayoutEdit, setOpenLayoutEdit] = useState(false);
  const [divStyle, setDivStyle] = useState({});
  const [isSelect, setIsSelect] = useState(3);

  useEffect(() => {
    const updateDivStyle = () => {
      if (window.innerWidth <= 414) {
        setDivStyle({
          marginTop: '60px'
        });
      } else {
        setDivStyle({
          marginTop: '0px'
        });
      }
    };

    updateDivStyle();

    window.addEventListener('resize', updateDivStyle);

    return () => {
      window.removeEventListener('resize', updateDivStyle);
    };
  }, []);

  return (
    <Layout onLayout={(x) => x.setBackgroundPadding(true)}>
      <Container>
        <Options>
          <Filter
            height={'50px'}
            width={'100px'}
            buttonNames={['Alunos', 'responsáveis', 'Professores', 'Todos']}
            select={isSelect}
            onClick={(i) => setIsSelect(i)}
          />
        </Options>
        <UsersBox>
           <UserInformation situation="professor" height="8vh" />
           <UserInformation situation="aluno" height="8vh" />
           <UserInformation situation="administrador" height="8vh" />
        </UsersBox>
      </Container>
    </Layout>
  );
};

export default Users;

