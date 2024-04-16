import styled from 'styled-components'

export const Container = styled.div`
background: ${({openOption}) => openOption ? "#323232" : "#363636"};
box-sizing: border-box;
letter-spacing: 1.5px;
align-items: center;
position: relative;
padding: 5px 10px;
cursor: pointer;
display: flex;
height: auto;
width: 100%;
gap: 10px;

&:hover {
  background: #323232;
}
`

export const Options = styled.ul `
height: ${({openOption}) => openOption ? 'auto' : '0px'};
flex-direction: column;
align-items: center;
list-style: none;
display: flex;
width: 100%;

& > li {
  display: ${({openOption}) => openOption ? 'flex' : 'none'};
  padding: 8px 0 8px 10px;
  box-sizing: border-box;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  width: 100%;
  gap: 10px;
}

& > li:hover {
  background: #323232;
}
`