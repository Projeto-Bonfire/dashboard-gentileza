import React, {useState, useEffect} from 'react'
import api from "../../services/api";
import Swal from "sweetalert2";
import NavInformation from '../../components/navInformation';
import Description from '../../components/description';
import Loader from '../../components/loader';
import Button from '../../components/buttons';
import Label from '../../components/label';
import Input from '../../components/input';

import { Container, WarnSection } from './styles';

const EditWarn = ({ onAction}) => {
  const [removeLoading, setRemoveLoading] = useState(false);
  const editData =  localStorage.getItem('editData');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [warn, setWarn] = useState({
    title: '',
    description: '',
  })

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);
  
  useEffect(() => {
    const getWarn = async () => {
      try {
        const response = await api.get("warn/all");
        const foundWarn = response.data.find((item) => item._id === editData);
        setWarn(foundWarn);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error);
      } 
    };

    getWarn();
  }, []);
  
  const editWarn = async () => {
    try {
       await api.put("warn/update", {
        id: editData,
        data: warn,
         
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Aviso editado com sucesso!",
        showConfirmButton: false,
        timer: 1500,
        background: '#363636',  
        customClass: {
          popup: 'custom-popup-class',
          title: 'custom-title-class',
          content: 'custom-content-class',
        },
      });
      location.reload();
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Falha ao editar aviso.",
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
      <>
     <Container>
         <NavInformation onAction={onAction} name={warn?.title}/>

        <WarnSection>
          <Label title = 'Titulo'/>
          <Input
            type = 'text'
            placeholder = 'Início do ano letivo'
            value = {warn?.title}
            onChange={(title) => {
              setWarn({ ...warn, title });
              setTitle(title)
            }}
          />

          <Label title = 'Descrição'/>
          <Description
            placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            value = {warn?.description}
            onChange={(description) => {
              setWarn({ ...warn, description });
              setDescription(description)
            }}
          />
        </WarnSection>
          <Button name = 'Atualizar' onAction= {editWarn}/>
     </Container>
       {!removeLoading && <Loader />}
        </>
    );
};

export default EditWarn;