import React, { useState } from "react";
import ButtonDropdownMenu from "../buttonDropdownMenu";
import { Container, CloseMenu, DropdownSchool, Config } from "./styles";
import {
  AiOutlineUser,
  AiOutlineDollar,
  AiOutlineTool,
  AiOutlineMenu,
  AiOutlineClose,
  AiTwotoneSetting,
} from "react-icons/ai";

const Menu = ({ openMenu, setOpenMenu }) => {
  let isOpen = openMenu;

  const data = [
    {
      icon: AiOutlineUser,
      title: "padrão",
    },
    {
      icon: AiOutlineDollar,
      title: "Economia",
    },
    {
      icon: AiOutlineTool,
      title: "Administração",
    },
  ];
  return (
    <Container isOpen={isOpen}>
      {!isOpen && (
        <AiOutlineMenu
          onClick={() => setOpenMenu(!openMenu)}
          color={"#fafafa"}
          size={24}
        />
      )}

      {isOpen && (
        <>
          <section>
            <CloseMenu onClick={() => setOpenMenu(!openMenu)}>
              <AiOutlineClose color={"#fafafa"} size={24} />
            </CloseMenu>
            <div>
              {"Undefined"}
              <DropdownSchool>
                <option> polivalente</option>
                <option> estadual</option>
              </DropdownSchool>
            </div>

            <Config>
              <AiTwotoneSetting color={"#fafafa"} size={24} />
            </Config>
          </section>

          {data.map((item, index) => (
            <ButtonDropdownMenu
              icon={item.icon}
              title={item.title}
              key={index}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default Menu;
