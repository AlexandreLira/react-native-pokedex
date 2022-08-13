import styled from 'styled-components/native';

interface EffortBarProps {
  width: number;
  color: string;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

export const Title = styled.Text`
  flex: 0.7;
  text-transform: uppercase;
  `
export const Number = styled.Text`
  flex: 0.2;

`
export const BarContent = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-radius: 10px;
  flex: 1;
`;

export const EffortBar = styled.View<EffortBarProps>`
  border-radius: 10px;
  height: 10px;
  width: ${({width}) => width}%;
  background-color: ${({color}) => color};
`