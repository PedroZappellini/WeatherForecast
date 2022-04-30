import styled from 'styled-components/native';
import defaultTheme from '../../themes';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
`;

export const Title = styled.Text`
  color: ${defaultTheme.colors.white};
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  font-family: ${defaultTheme.fonts.bold};
`;

export const Description = styled.Text`
  color: ${defaultTheme.colors.white};
  font-size: 16px;
  text-align: center;
  margin-bottom: 50px;
  font-family: ${defaultTheme.fonts.medium};
`;
