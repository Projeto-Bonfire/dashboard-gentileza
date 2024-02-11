import React, {useState} from "react";
import { MenuButton, Menu, Button } from './styles';
import { AiOutlineMore } from 'react-icons/ai';


const MenuNavigation = ({option, onAction}) => {
   const [select, setSelect] = useState(false);
   const [inView, setInView] = useState(false);
  return (
    <div style={{display: "flex"}}>
      <MenuButton
        select={select}
        onClick={() => {
          setSelect(!select);
          setInView(!inView);
        }}
      >
        <AiOutlineMore color={"#fafafa"} size={24} />
      </MenuButton>
      <Menu inView={inView}>
        {option.map((item, index) => {
       return <Button key={index} inView={inView} onClick={() => onAction}>{item}</Button>
        })}
      </Menu>
    </div>
  );
};

export default MenuNavigation;
