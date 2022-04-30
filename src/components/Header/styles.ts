import styled from 'styled-components/native';
import defaultTheme from '../../themes';

export const Container = styled.View`
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const Title = styled.Text`
  color: ${defaultTheme.colors.white};
  font-size: 28px;
  font-family: ${defaultTheme.fonts.bold};
`;
