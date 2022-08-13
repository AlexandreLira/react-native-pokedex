import React from 'react';
import { Text } from 'react-native';
import { Container, ProfileContainer, ProfileImage, ProfileName, Title } from './styles';

export function Header(){
    const profileURL = 'https://i.pinimg.com/originals/81/63/94/816394a06b8c3a129155a4dd182fe79b.jpg'
    return (
        <Container>
            <ProfileContainer>
                <ProfileImage source={{uri: profileURL}}/>
                <ProfileName>Ash</ProfileName>
            </ProfileContainer>
            <Text>10 pokemons salvos</Text>
        </Container>
    )
}