import React, { useState } from 'react';
import { ActivityIndicator, ButtonProps } from 'react-native';
import { Container, PickerSelect } from './styles';

interface Props {
  data: {
    id: number;
    offset: number;
  }[];
  selectedValue: number;
  handleChangePage: Function;
  loading?: boolean
}

export function PaginationPickerSelect({
  data,
  selectedValue,
  handleChangePage,
  loading
}: Props) {
  return (
    <Container>
      {!loading ? (
        <PickerSelect
          selectedValue={selectedValue}
          onValueChange={(value: number) => {
            handleChangePage(value)
          }}>
          {data.map((item, index) => (
            <PickerSelect
              key={String(item.id)}
              label={String(item.id)}
              value={item.offset}
            />
          ))}

        </PickerSelect>
      ) : (
        <ActivityIndicator size="small" color="#000" />
      )}

    </Container>
  )
}