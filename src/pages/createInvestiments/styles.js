import styled from 'styled-components'

export const Container = styled.div`
box-sizing: border-box;
flex-direction: column;
align-items: center;
display: flex;
justify-content: center;
height: 90vh;
width: 100%;
gap: 15px;


}`

export const InvestimentsSection = styled.div`
 flex-direction: column;
 margin-top: 20px;
 display: flex;
 height: auto;
 width: 50%;
 gap: 15px;
 @media (max-width: 614px) {
 width:80%;

 }
`