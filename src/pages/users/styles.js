import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  align-items: center; 
  position: relative;
  overflow-y: scroll;
  display: flex;
  height: 95%;
  width: 100%;
  gap: 30px;

  @media (max-width: 414px) {
  height: 80%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;  

export const Options = styled.div`
  width: 60%;
  
   @media (max-width: 820px) {
     margin-top: 60px;
     width: 80%;
   }
`

export const UsersBox = styled.div`
 flex-direction: column;
 display: flex;
 width: 80%;
 gap: 15px;
 
 @media (max-width: 820px) {
   width: 100%;
 }
`