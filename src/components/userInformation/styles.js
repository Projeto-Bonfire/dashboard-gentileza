
import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.tertiaryBackground};
  height: ${({ height }) => height};
  box-sizing: border-box;
  align-items: center;
  border-radius: 2px;
  position: relative;
  padding-top: 4px;
  display: flex;
  width: 100%;
  gap: 2%;

  @media (max-width: 820px) {
    height: 7vh;
    gap: 5%;
  }
`;

export const Square = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.text};
  justify-content: center;
  align-items: center;
  margin-left:2%;
  display: flex;
  height: 5vh;
  width: 4vw;

  @media (max-width: 820px) {
    margin-left:5%;
    width: 12vw;
  }
`
export const Text = styled.div`
  color: ${({ theme }) => theme.colors.text};
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
`;
