import { Animated } from 'react-native';
import styled from 'styled-components/native';

interface EffortBarProps {
  color: string;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

export const Title = styled.Text`
  flex: 0.7;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray_dark};
`

export const Number = styled.Text`
  color: ${({ theme }) => theme.colors.gray_dark};
  flex: 0.2;

`
export const BarContent = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-radius: 10px;
  flex: 1;
`;

export const EffortBar = styled(Animated.View)<EffortBarProps>`
  border-radius: 10px;
  height: 10px;
  background-color: ${({color}) => color};
`