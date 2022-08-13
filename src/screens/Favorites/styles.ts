import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const List = styled(FlatList).attrs({
  columnWrapperStyle: { 
    justifyContent: 'space-between', 
    marginHorizontal: '2%',
  },
  numColumns: 2,
  showsHorizontalScrollIndicator: false,
})``;