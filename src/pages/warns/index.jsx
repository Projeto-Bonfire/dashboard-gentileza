import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { AiOutlineForm, AiOutlineCopy, AiOutlineDelete } from 'react-icons/ai'

import WarnContainer from '../../components/warnContainer';
import EditWarn from '../../components/editWarn';
import Layout from '../../components/layout';
import Loader from '../../components/loader';
import Filter from '../../components/filter';
import { Container, Options } from './styles';
import Swal from 'sweetalert2';
import Alert from '../../components/alert';


const todayDate = new Date();

const Warnings = ({ showIcon = true }) => {
  const [openLayoutEdit, setOpenLayoutEdit] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [alertData, setAlertData] = useState(null);
  const [warnings, setWarnings] = useState([]);
  const [isSelect, setIsSelect] = useState(3);
  
  const data = [
    { icon: <AiOutlineForm/>, name: 'edit' },
    { icon: <AiOutlineDelete/>, name: 'delete'},
    { icon: <AiOutlineCopy/>, name: 'copy' }
  ]; 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);
  
  function CloseEdit() {
    setOpenLayoutEdit(false);
    localStorage.removeItem('editData');
  }
  
  const filteredWarns = warnings.filter((warnItem) => {
    const itemDate = new Date(warnItem.date);

    if (isSelect === 0) {
      return itemDate.toDateString() === todayDate.toDateString();
    } else if (isSelect === 1) {
      const daysInWeek = 7;
      const diffDays = Math.floor((todayDate - itemDate) / (24 * 60 * 60 * 1000));
      return diffDays < daysInWeek && diffDays >= 0;
    } else if (isSelect === 2) {
      const daysInMonth = 30;
      const diffDays = Math.floor((todayDate - itemDate) / (24 * 60 * 60 * 1000));
      return diffDays < daysInMonth && diffDays >= 0;
    } else {
      return true;
    }
  })

  useEffect(() => {
    const getAllWarns = async () => {
      try {
        var response = await api.get('warn/all');
        setWarnings(response.data);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error);
      } 
    };

    getAllWarns();
  }, []);

  const[deleted, setDeleted] = useState(null);
  const deletedWarnAlert = async (id) => {
    setDeleted(id)
    setAlertData({ value: 'delete', message: ' apagado com sucesso' });
  }

  const deleteWarn = async (id) => {
    try {

      var response =  await api.delete('warn/delete', { data: { id: id } });
        location.reload();

    } catch (error) {
      console.log('aviso deu erro', error);
    }
  };


          const content = openLayoutEdit === false ? (
            <>
             
              <Options>
              
                <Filter
                  height={'50px'}
                  width={'100px'}
                  buttonNames={['Hoje', 'Essa semana', 'Esse mês', 'Todos']}
                  select={isSelect}
                  onClick={(i) => setIsSelect(i)}
                />
            
                </Options>
              <Container>
                {alertData && (
                  <Alert
                    value={alertData.value}
                    message={alertData.message}
                    onConfirm={() => {
                      if (alertData.value === 'delete') {
                        deleteWarn(deleted);
                      }
                      setAlertData(null);
                    }}
                    onCancel={() => setAlertData(null)}
                  />
                )}
                {filteredWarns.map((warnItem, index) => (
                  <WarnContainer
                    title={warnItem?.title || ''}
                    text={warnItem?.description || ''}
                    date={warnItem?.date || ''}
                    showIcon={showIcon}
                    key={index}
                    data={data}
                    
                    onAction={(i) => {
                      if (data[i].name === 'edit') {
                        localStorage.setItem('editData', warnItem?._id);
                        setOpenLayoutEdit(true);
                      } else if (data[i].name === 'delete') {
                        deletedWarnAlert(warnItem?._id);
                      } else {
                        navigator.clipboard
                          .writeText(warnItem?._id)
                          .then(() =>
                            Swal.fire({
                              position: 'center',
                              icon: 'success',
                              title: 'ID copiado com sucesso',
                              showConfirmButton: false,
                              timer: 1500,
                              background: '#363636',    
                              customClass: {
                                popup: 'custom-popup-class',
                                title: 'custom-title-class',
                                content: 'custom-content-class',
                              },
                            })
                          )
                          .catch(() =>
                            Swal.fire({
                              position: 'center',
                              icon: 'error',
                              title: 'Falha ao copiar ID',
                              showConfirmButton: false,
                              timer: 1500,
                              background: '#363636',    
                              customClass: {
                                popup: 'custom-popup-class',
                                title: 'custom-title-class',
                                content: 'custom-content-class',
                              },
                            })
                          );
                      }
                    }}
                  />
               ))}
              </Container>
             </>
              ) : (
                <EditWarn onAction={CloseEdit}/>
              );
   
      return (
        <>
            <Layout onLayout={(x) => x.setBackgroundPadding(true)}>
              {content}
               {!removeLoading && <Loader />}
            </Layout>
          

        </>
      );
};

export default Warnings;
