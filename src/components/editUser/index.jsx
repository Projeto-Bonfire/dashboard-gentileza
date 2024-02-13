import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Filter from "../../components/filter";
import Loader from '../../components/loader';
import Button from "../buttons";
import Input from "../input";
import Swal from "sweetalert2";
import Label from "../label";
import NavInformation from "../navInformation";

import { Container, CreateSection } from "./styles";

const EditUser = ({ onAction }) => {

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);
  
  const [removeLoading, setRemoveLoading] = useState(false);  
  const rolesButton = ["usuário", "responsável", "administrador"];
  const statusButton = ["desativado", "não registrado", "logado"];
  const editData = localStorage.getItem("editData");
  const [status, setStatus] = useState(undefined);
  const [role, setRole] = useState(undefined);
  const [user, setUser] = useState({
    name: "",
    role: "",
    status: "",
    governamentalId: "",
    wallet: "",
  });

  
  const roleUser = (index) => {
    if (index === 0) {
      setUser({ ...user, role: "usuário" });
    } else if (index === 1) {
      setUser({ ...user, role: "responsável" });
    } else if (index === 2) {
      setUser({ ...user, role: "administrador" });
    }
  };

  const statusUser = (index) => {
    if (index === 0) {
      setUser({ ...user, status: "desativado" });
    } else if (index === 1) {
      setUser({ ...user, status: "não registrado" });
    } else if (index === 2) {
      setUser({ ...user, status: "logado" });
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await api.get("/user/admin");
        const foundUser = response.data.find((item) => item._id === editData);
        setUser(foundUser);

        if (
          foundUser &&
          foundUser.role &&
          rolesButton.includes(foundUser.role)
        ) {
          setRole(rolesButton.indexOf(foundUser.role));
        }
        if (
          foundUser &&
          foundUser.status &&
          statusButton.includes(foundUser.status)
        ) {
          setStatus(statusButton.indexOf(foundUser.status));
        }
        setRemoveLoading(true);
      } catch (error) {
        console.log(error);
      } 
    };

    getUser();
  }, []);

  const editUser = async () => {
    try {
      await api.put("user/admin/update-user", {
        id: editData,
        data: user,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuário editado com sucesso!",
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
        title: "Falha ao editar usuário.",
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
      <NavInformation onAction={onAction} name={user?.name || ""} />
      <Container>
        <CreateSection>
          <Label title="Tipo da conta" />
          <Filter
            buttonNames={rolesButton}
            select={role}
            onClick={(i) => {
              setRole(i);
              roleUser(i);
            }}
          />

          <Label title="Status da conta" />
          <Filter
            buttonNames={statusButton}
            select={status}
            onClick={(i) => {
              setStatus(i);
              statusUser(i);
            }}
          />

          <Label title="Número de matrícula" />
          <Input
            type="text"
            placeholder="Número de matrícula"
            value={user?.governamentalId || ""}
            onChange={(governamentalId) => {
              setUser({ ...user, governamentalId });
            }}
          />

          <Label title="Nome" />
          <Input
            type="text"
            placeholder="João Vitor Dutra de Souza"
            value={user?.name || ""}
            onChange={(name) => {
              setUser({ ...user, name });
            }}
          />

          <Label title="Carteira" />
          <Input
            type="number"
            placeholder="15 gentilezas"
            value={user?.wallet || ""}
            onChange={(wallet) => {
              setUser({ ...user, wallet });
            }}
          />
        </CreateSection>
        <Button onAction={editUser} name="Atualizar" />
      </Container>
      {!removeLoading && <Loader />}
    </>
  );
};

export default EditUser;
