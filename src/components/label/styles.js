import styled from 'styled-components'
export const Container = styled.div`
padding: ${({height}) => height} 0;
width: 100%;
text-transform: capitalize;
color: ${({theme}) => theme.colors.secondaryText};

@media (max-width: 820px) {
font-size: 12px;
}
`