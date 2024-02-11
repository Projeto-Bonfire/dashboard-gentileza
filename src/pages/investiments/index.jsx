import React, { useState, useEffect } from 'react';

import WarnContainer from '../../components/warnContainer';
import Layout from '../../components/layout';
import Filter from '../../components/filter';
import { Container } from './styles';

const Investiments = ({ showIcon = true, data = ['Editar', 'Criar', 'Deletar', 'Copiar ID'] }) => {

  const [reloadPage, setReloadPage] = useState(false);
  const [alertData, setAlertData] = useState(null);
  const [warnings, setWarnings] = useState([]);
  const [isSelect, setIsSelect] = useState(3);

  const [divStyle, setDivStyle] = useState({});

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
        <>

            <Layout onLayout={(x) => x.setBackgroundPadding(true)}>
              <div style={{margin: 'auto', width: '80%', display: 'grid', placeItems: 'center', marginBottom: '15px', ...divStyle}}>
                <Filter
                  height={'50px'}
                  width={'100px'}
                  buttonNames={['Hoje', 'Essa semana', 'Esse mês', 'Todos']}
                  select={isSelect}
                  onClick={(i) => setIsSelect(i)}
                />
              </div>
              <Container>

                  <WarnContainer
                    title={'a'}
                    text={'a'}
                    date={'e'}
                    showIcon={showIcon}
                    data={data}
                  />

              </Container>
            </Layout>


        </>
      );
};

export default Investiments;
