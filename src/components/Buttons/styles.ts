import styled from 'styled-components/native';
import defaultTheme from '../../themes';

export const Container = styled.View`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${defaultTheme.colors.blue};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: ${defaultTheme.colors.white};
  font-size: 12px;
  font-family: ${defaultTheme.fonts.medium};
`;
