import styled from 'styled-components'

export const Container = styled.div`
color: ${({theme}) => theme.colors.secondaryText};
width: 100%;

@media (max-width: 820px) {
font-size: 13px;
}
`