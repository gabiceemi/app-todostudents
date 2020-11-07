import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  margin-top: 40px;
  padding: 0 30px ${Platform.OS === 'android' ? 100 : 40}px;
`;

export const Title = styled.Text`
  font-size: 32px;
  line-height: 32px;
  align-self: flex-start;
  color: #343434;
  font-family: 'Quicksand-Bold';
`;

export const Subtitle = styled.Text`
  width: 75%;
  font-size: 18px;
  align-self: flex-start;
  color: #343434;
  font-family: 'Quicksand-Medium';
  margin: 8px 0 44px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 30px;
  bottom: 0;
  right: 0;
  top: 0;
`;
