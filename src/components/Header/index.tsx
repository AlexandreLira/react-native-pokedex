import React from 'react';
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
import { useNavigation } from '@react-navigation/native';


export function Header() {
    const { savedPokemons, saveOrUnsalvePokemon } = usePokemons()
    const { colors } = theme
    const navigation = useNavigation()
    return (
        <Container>
            <ProfileContainer>
                <ProfileImage source={{ uri: profileURL }} />
                <ProfileName>Ash</ProfileName>
            </ProfileContainer>

            <SaveContainer onPress={() => navigation.navigate('Favorites')}>
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