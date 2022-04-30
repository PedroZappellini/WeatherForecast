import styled from 'styled-components/native';
import defaultTheme from '../../themes';

export const TouchableContainer = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  border-radius: 8px;
  width: 100%;
  height: 90px;
  background-color: ${defaultTheme.colors.lighterBottomTabBlack};
`;

export const InfoContainer = styled.View`
  margin-left: 20px;
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-family: ${defaultTheme.fonts.bold};
  font-size: 16px;
  color: ${defaultTheme.colors.white};
`;

export const Latitude = styled.Text`
  font-family: ${defaultTheme.fonts.medium};
  color: ${defaultTheme.colors.white};
  font-size: 12px;
  opacity: 0.6;
  margin-right: 10px;
`;

export const Longitude = styled.Text`
  font-family: ${defaultTheme.fonts.medium};
  color: ${defaultTheme.colors.white};
  font-size: 12px;
  opacity: 0.6;
`;

export const CoordsContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const GoToMapsText = styled.Text`
  font-family: ${defaultTheme.fonts.medium};
  color: ${defaultTheme.colors.darkerBlue};
  font-size: 10px;
  margin-right: 5px;
`;

export const GoToMapsContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const IconsContainer = styled.View`
  flex: 1;
  height: 70px;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TouchableIcons = styled.TouchableOpacity``;
