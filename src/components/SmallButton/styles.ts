import styled from 'styled-components/native';
import defaultTheme from '../../themes';

export const Container = styled.View``;

export const Button = styled.TouchableOpacity`
  background-color: ${defaultTheme.colors.darkerBlue};
  width: 30%;
  height: 30px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${defaultTheme.colors.white};
  font-family: ${defaultTheme.fonts.medium};
  font-size: 10px;
`;
