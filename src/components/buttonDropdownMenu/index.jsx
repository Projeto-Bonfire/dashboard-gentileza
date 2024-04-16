import React, { useState } from "react";
import { Container, Options } from "./styles";
import { useNavigate } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineUserAdd,
  AiOutlineNotification,
  AiOutlineFileAdd,
  AiOutlineLineChart,
  AiOutlineFundView,
} from "react-icons/ai";

import { MdChevronRight } from "react-icons/md";

const ButtonDropdownMenu = ({ icon: Icon, title }) => {
  const [openOption, setOpenOption] = useState(false);
  let navigate = useNavigate();

  const data = [
    {
      name: "Dashboard",
      link: "/dashboard",
      IconOption: AiOutlineHome,
    },
    {
      name: "Usuários",
      link: "/users",
      IconOption: AiOutlineTeam,
    },
    {
      name: "Criar Usuário",
      link: "/create-user",
      IconOption: AiOutlineUserAdd,
    },
    {
      name: "Avisos",
      link: "/notifications",
      IconOption: AiOutlineNotification,
    },
    {
      name: "Criar Aviso",
      link: "/create-notification",
      IconOption: AiOutlineFileAdd,
    },
    {
      name: "Investimentos",
      link: "/investiments",
      IconOption: AiOutlineFundView,
    },
    {
      name: "Criar Investimentos",
      link: "/create-investiments",
      IconOption: AiOutlineLineChart,
    },
  ];

  return (
    <>
      <Container onClick={() => setOpenOption(!openOption)} openOption={openOption}>
        <MdChevronRight
          style={{
            transition: ".3s",
            transform: openOption ? "rotate(90deg)" : "rotate(0deg)",
            color: "#fafafa",
            fontSize: 24,
          }}
        />

        {Icon && <Icon color={"#fafafa"} size={24} />}
        {title}
      </Container>

      <Options openOption={openOption}>
        {data.map(({ name, IconOption, link }, index) => (
          <li
            IconOption={IconOption}
            name={name}
            link={link}
            key={index}
            onClick={() => navigate(link)}
          >
            <IconOption color={"#fafafa"} size={18} />
            {name}
          </li>
        ))}
      </Options>
    </>
  );
};

export default ButtonDropdownMenu;
