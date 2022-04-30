import styled from 'styled-components/native';
import defaultTheme from '../../themes';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  margin-top: 15%;
`;

export const OpenListContainer = styled.View`
  width: 100%;
  height: 50px;
`;

export const OpenList = styled.TouchableOpacity`
  background: ${defaultTheme.colors.bottomTabBlack};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const CloseModalButtonContainer = styled.View`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CloseModalButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: ${defaultTheme.colors.lighterGray};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const CountryTitle = styled.Text`
  color: ${defaultTheme.colors.white};
  font-size: 28px;
  text-align: center;
  font-family: ${defaultTheme.fonts.bold};
`;

export const CalendarTitle = styled.Text`
  color: ${defaultTheme.colors.white};
  font-size: 12px;
  opacity: 0.6;
  margin-top: 20px;
  text-align: center;
  font-family: ${defaultTheme.fonts.medium};
`;

export const ChangeButtonsContainer = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 25px;
`;

export const WeatherImageContainer = styled.View`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const InfoContainer = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const InfoText = styled.Text`
  color: ${defaultTheme.colors.white};
  font-size: 16px;
  font-family: ${defaultTheme.fonts.medium};
  text-align: center;
`;
export const InfoLabel = styled.Text`
  color: ${defaultTheme.colors.white};
  font-family: ${defaultTheme.fonts.medium};
  font-size: 12px;
  opacity: 0.6;
  text-align: center;
`;

export const InfoTextContainer = styled.View``;

export const NextDaysContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

export const EachNextDay = styled.View`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const EachNextDayInfo = styled.Text`
  color: ${defaultTheme.colors.white};
  font-family: ${defaultTheme.fonts.medium};
  font-size: 12px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const EachNextDayInfoAir = styled.Text`
  color: ${defaultTheme.colors.white};
  font-family: ${defaultTheme.fonts.medium};
  font-size: 12px;
  margin-left: 20px;
`;

export const EachDayInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const EachDayInfoGraphContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const NextDaysLabel = styled.Text`
  color: ${defaultTheme.colors.white};
  font-family: ${defaultTheme.fonts.medium};
  font-size: 12px;
  opacity: 0.6;
`;

export const NextDaysLabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NextDaysWeatherImageContainer = styled.View`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.Text`
  color: ${defaultTheme.colors.white};
  font-size: 28px;
  font-family: ${defaultTheme.fonts.medium};
  margin-left: 20px;
`;

export const CardContainer = styled.View`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;

export const AddedListContainer = styled.View`
  flex: 1;
  margin-top: 30px;
  padding-horizontal: 20px;
`;
