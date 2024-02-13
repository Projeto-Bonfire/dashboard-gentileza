import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  display: flex;
  height: 95%;
  width: 100%;
  gap: 15px;

  @media (max-width: 414px) {
  height: 80%;
  }

&::-webkit-scrollbar{
  display: none;
}

}
`


export const Options = styled.div`
  margin: auto;
  width: 80%;
  display: grid;
  place-items: center;
  margin-bottom: 15px;


   @media (max-width: 414px) {
     margin-top: 60px;
   }
`