import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { PokemonDTO } from '../../dtos/PokemonDTO';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Title = styled.Text`
  font-size: 30px;
`;

export const PaginationContainer = styled.View`
  flex-direction: row; 
  flex: 1; 
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-right: 2%;
  margin-left: 2%;
`;

export const List = styled(
  FlatList as new (props: FlatListProps<PokemonDTO>) => FlatList<PokemonDTO>
).attrs({
  columnWrapperStyle: { 
    justifyContent: 'space-between', 
    marginHorizontal: '2%',
  },
  numColumns: 2,
  showsHorizontalScrollIndicator: false
})``;