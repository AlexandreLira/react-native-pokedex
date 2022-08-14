import styled from "styled-components/native";
import { Picker } from '@react-native-picker/picker';

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.white};
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    flex: 0.3;
    height: 50px;
    
`;

export const PickerSelect = styled(Picker).attrs({
    itemStyle: {textAlign: 'right'},
})`
    width: 100%;
`;

export const PickerSelectItem = styled(Picker.Item)`
`;