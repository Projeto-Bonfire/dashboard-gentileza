import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    display: flex;
    width: 100%;
`

export const Box = styled.div`
     flex-direction: row;
     display: flex;
     gap: 8px;

    &>h1{
      font-size: 45vh;
    }

    @media (max-width: 820px) {
      gap: 2px;
      &>h1{
        font-size: 10rem;
      }

      &>img{
        width:170px
      }

    }
`

export const Informations = styled.div`
   text-transform: capitalize;
   flex-direction: column;
   padding-top: 40px;
   text-align:center;
   display: flex;

  &>p{
    font-size: 1.2rem;
  }

  &>Button{
    margin-top:25px;
  }

  @media (max-width: 820px) {
     padding-top: 80px;

    &>p{
      font-size: 1rem;
    }
    &>Button{
      font-size: 10px;
    }

  }
`