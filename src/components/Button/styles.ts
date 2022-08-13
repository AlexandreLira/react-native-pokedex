import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.white};
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    flex: 0.3;
    height: 50px;
    
`;

interface TitleProps {
    disabled: boolean
}

export const Title = styled.Text<TitleProps>`
    color: ${(props) => props.disabled ? props.theme.colors.gray : '#000'};
`;