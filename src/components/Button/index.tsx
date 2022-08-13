import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { ActivityIndicator, ButtonProps } from 'react-native';
import { Container, Title } from './styles';

interface Props {
  children?: React.ReactNode;
  onPress?: Function;
  loading?: boolean;
  disabled?: boolean;
}

export function Button({ 
  children, 
  onPress, 
  loading = false, 
  disabled = false
}: Props) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      {loading ? (
        <ActivityIndicator size="small" color="#000"/>
      ) : (
        <Title disabled={disabled}>
          {children}
        </Title>
      )}
    </Container>
  )
}