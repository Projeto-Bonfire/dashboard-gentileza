import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Loader from '../../components/loader';
import WarnContainer from '../../components/warnContainer';
import Layout from '../../components/layout';
import { Container } from './styles';

const Investiments = ({ showIcon = true, data = ['Editar', 'Criar', 'Deletar', 'Copiar ID'] }) => {
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);
  
  const [removeLoading, setRemoveLoading] = useState(false);
  const [reloadPage, setReloadPage] = useState(false);
  const [alertData, setAlertData] = useState(null);
  const [investiments, setInvestiments] = useState([]);
  const [isSelect, setIsSelect] = useState(3);

  useEffect(() => {
    
    const getInvestiments = async () => {
      try {
        var response = await api.get('economy/investment');
        setInvestiments(response.data);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error);
      } 
    };

    getInvestiments();
  }, []);
  
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
        
              <Container>
                {investiments.slice().reverse().map((investiment, index) => (    
            <WarnContainer
            title={investiment?.name || ''}
            text={investiment?.description || ''}
            date={investiment?.date || ''}
            showIcon={showIcon}
              key={investiment._id || ''}
            data={data}
          />
                ))}
        

              </Container>
              {!removeLoading && <Loader />}
            </Layout>


        </>
      );
};

export default Investiments;
