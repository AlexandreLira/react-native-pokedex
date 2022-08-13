import styled from "styled-components/native";

export const Container = styled.View`
    width: 48%;
    background-color: ${({theme}) => theme.colors.white};
    padding: 20px;
    border-radius: 10px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PokemonName = styled.Text`
    font-size: 15px;
    text-transform: capitalize;
`;

export const SaveButton = styled.TouchableOpacity`

`;

export const PokemonImage = styled.Image`
    height: 100px;
    width: 100px;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
` 

