
import React, { useState } from 'react';
import {Container, Section, Data, TextArea, Edit, MenuButton, Menu} from './styles';
import {AiOutlineClockCircle, AiOutlineMore} from 'react-icons/ai';
import MenuNavigation from '../menuNavigation'



const WarnContainer = ({
  title,
  text,
  date,
  width='90',
  height='20',
  showIcon,
  data,
  onAction
}) => {

  const formattedDate = new Date(date).toLocaleString(); 
 const [select, setSelect] = useState(false);
 const [inView, setInView] = useState(false);
  return(
    <>
    <Container 
      width={width}
      height={height}
      >

    <Section>
      <Edit>
        <h2>{title}</h2>
        <MenuNavigation option={["1", "2"]}/>
      </Edit >
        {showIcon && (
      <TextArea>{text}</TextArea>

)}
    </Section>

      {showIcon && (
        <Data>
          <AiOutlineClockCircle color='#fafafa' size={24} />
          {formattedDate}
        </Data>
      )}


    </Container>
    </>
  )
}

export default WarnContainer;