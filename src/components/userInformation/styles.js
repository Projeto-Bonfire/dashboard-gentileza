
import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.tertiaryBackground};
  box-sizing: border-box;
  align-items: center;
  border-radius: 4px;
  position: relative;
  padding: 10px 5px;
  display: flex;
  margin: 0 auto;
  height: auto;
  width: 90%;
  gap: 2%;

 
`;

export const Square = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.text};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left:2%;
  display: flex;
  height: 50px;
  width: 50px;
`
export const Text = styled.div`
  color: ${({ theme }) => theme.colors.text};
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
`;
