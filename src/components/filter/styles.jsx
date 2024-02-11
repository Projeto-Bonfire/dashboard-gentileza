import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  gap: 10px;


`;

export const Button = styled.button`
  color: ${({ theme, select }) => (!select ? theme.colors.secondaryText : '#36D3DD')};
  background: ${({ theme }) => theme.colors.tertiaryBackground};
  width: ${({ width }) => width || 'calc((100% / 4) - 10px)'};
  cursor: pointer;
  padding: 12px 0;
  font-size: 16px;
  flex-grow: 1;
  border: none;


  &:first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 820px) {
    font-size: 10px;
  }

`;
