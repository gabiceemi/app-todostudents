import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #343434;
  align-self: center;
  font-family: 'Quicksand-Medium';
  margin: 28px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 8px;
`;

export const ForgotPasswordText = styled.Text`
  color: #343434;
  font-size: 14px;
  font-family: 'Quicksand-Bold';
  margin-right: 4px;
`;

export const ContainerPassword = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const Remember = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 8px;
`;

export const RememberText = styled.Text`
  color: #343434;
  font-size: 14px;
  font-family: 'Quicksand-Regular';
`;

export const ContainerCreateAccount = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-top: 8px;
`;

export const CreateAccount = styled.Text`
  color: #343434;
  font-size: 14px;
  font-family: 'Quicksand-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const CreateAccountText = styled.Text`
  color: #343434;
  font-size: 14px;
  font-family: 'Quicksand-Bold';
`;
