import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 4%;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2%;
  padding-left: 4%;
  padding-right: 4%;
`
export const Button = styled.TouchableOpacity`

`;

export const NameContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 4%;
  margin-bottom: 2%;
  padding-left: 4%;
  padding-right: 4%;
`;

export const PokemonName = styled.Text`
  font-size: 30px;
  text-transform: capitalize;
`;

export const PokemonId = styled.Text`
`;

export const ImageContent = styled.View`
  padding-left: 4%;
  padding-right: 4%;
`;

export const PokemonImage = styled.Image`
  height: 300px;
  z-index: 99;
`;

export const InformationContent = styled.View`
  margin-top: -10%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding: 15% 4% 4% 4%;
  flex: 1;
  background-color: white;
`;

export const Title = styled.Text`
  font-size: 20px;
`;
