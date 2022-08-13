import React from 'react';
import { Text, View } from 'react-native';
import {
    Badge,
    BadgeText,
    Container,
    ProfileContainer,
    ProfileImage,
    ProfileName,
    SaveContainer,
    Title
} from './styles';

import { usePokemons } from '../../hooks/usePokemons';
import theme from '../../styles/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { profileURL } from '../../utils/constant';


export function Header() {
    const { savedPokemons, saveOrUnsalvePokemon } = usePokemons()
    const { colors } = theme
    return (
        <Container>
            <ProfileContainer>
                <ProfileImage source={{ uri: profileURL }} />
                <ProfileName>Ash</ProfileName>
            </ProfileContainer>

            <SaveContainer>
                {Boolean(savedPokemons.length) ? (
                    <Badge>
                        <BadgeText>{savedPokemons.length > 99 ? '+99' : savedPokemons.length}</BadgeText>
                    </Badge>

                ) : null}
                <MaterialCommunityIcons
                    name="pokeball"
                    size={40}
                    color={colors.gray}
                />
            </SaveContainer>
        </Container>
    )
}