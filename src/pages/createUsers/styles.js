import styled from 'styled-components'
export const Container = styled.div`
justify-content: center;
box-sizing: border-box;
flex-direction: column;
align-items: center;
position: relative;
overflow-y: scroll;
display: flex;
height: 100%;
width: 100%;
gap: 15px;

@media (max-width: 820px) {
justify-content: center;
}

&::-webkit-scrollbar {
  display: none;
}
`

export const CreateSection = styled.div`
  flex-direction: column;
  display: flex;
  width: 50%;
  gap: 15px;
  
  @media (max-width: 820px) {
  width: 90%;
  }
`