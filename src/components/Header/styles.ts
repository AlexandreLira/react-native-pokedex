import styled from 'styled-components/native';

export const Container = styled.View`
  width: 96%;
  margin: 2%;
  height: 80px;
  border-radius: 10px;
  background-color: white;
  padding: 4%;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 30px;
`

export const ProfileContainer = styled.View`
  align-items: center;
  flex-direction: row;
`

export const ProfileName = styled.Text`
  font-size: 20px;
  margin-left: 10px;
`

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`