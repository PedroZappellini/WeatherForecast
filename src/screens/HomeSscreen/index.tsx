import React, {useContext, useEffect, useRef, useState} from 'react';
import {Image, ImageBackground, ScrollView} from 'react-native';
import BackgorundImg from '../../assets/background/Background.png';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import BrokenClouds from '../../assets/weatherConditions/BrokenClouds.png';
import ClearSky from '../../assets/weatherConditions/ClearSky.png';
import FewClouds from '../../assets/weatherConditions/FewClouds.png';
import Rain from '../../assets/weatherConditions/Rain.png';
import ScatteredClouds from '../../assets/weatherConditions/ScatteredClouds.png';
import ShowerRain from '../../assets/weatherConditions/ShowerRain.png';
import Snow from '../../assets/weatherConditions/Snow.png';
import Thunderstorm from '../../assets/weatherConditions/Thunderstorm.png';
import Mist from '../../assets/weatherConditions/Mist.png';
import ModerateRain from '../../assets/weatherConditions/ModerateRain.png';
import LineGraph from '../../assets/ic_graph.svg';

import {Modalize} from 'react-native-modalize';
import * as S from './styles';
import defaultTheme from '../../themes';
import WeatherContext from '../../contexts/weather';
import SmallButton from '../../components/SmallButton';
import PlacesCard from '../../components/PlacesCard';

const HomeScreen: React.FC = () => {
  const modalizeRef = useRef<Modalize>(null);
  const {
    data,
    nextDaysData,
    addedList,
    loadCurrentDayApi,
    loadNextDaysApi,
    currentLat,
    currentLng,
    setFavorited,
  } = useContext(WeatherContext);
  const date = new Date().toLocaleString();
  const [colorOne, setColorOne] = useState(true);
  const [colorTwo, setColorTwo] = useState(false);
  const [title, setTitle] = useState('');

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  const handleCondition = () => {
    const condition = data?.weather[0].description;

    switch (condition) {
      case 'clear sky':
        return ClearSky;
      case 'few clouds':
        return FewClouds;
      case 'scattered clouds':
        return ScatteredClouds;
      case 'broken clouds':
        return BrokenClouds;
      case 'shower rain':
        return ShowerRain;
      case 'light rain':
        return Rain;
      case 'rain':
        return Rain;
      case 'thunderstorm':
        return Thunderstorm;
      case 'snow':
        return Snow;
      case 'mist':
        return Mist;
      case 'overcast clouds':
        return Mist;
      case 'moderate rain':
        return ModerateRain;
      default:
        break;
    }
  };

  const nextDaysHandleCondition = (condition: string) => {
    switch (condition) {
      case 'clear sky':
        return ClearSky;
      case 'few clouds':
        return FewClouds;
      case 'scattered clouds':
        return ScatteredClouds;
      case 'broken clouds':
        return BrokenClouds;
      case 'shower rain':
        return ShowerRain;
      case 'rain':
        return Rain;
      case 'light rain':
        return Rain;
      case 'thunderstorm':
        return Thunderstorm;
      case 'snow':
        return Snow;
      case 'mist':
        return Mist;
      case 'overcast clouds':
        return Mist;
      case 'moderate rain':
        return ModerateRain;
      default:
        break;
    }
  };

  const callApis = (latitude: number, longitude: number) => {
    loadCurrentDayApi(latitude, longitude);
    loadNextDaysApi(latitude, longitude);
  };

  const handleAddedList = () => {
    const added = addedList.map(item => (
      <S.CardContainer key={item.id}>
        <PlacesCard
          onPress={() => {
            callApis(item.latitude, item.longitude);
            onClose();
            setTitle(item.title);
          }}
          onUnpressedFavoriteIcon={() => {
            setFavorited(true);
          }}
          onPressedFavoriteIcon={() => {
            setFavorited(false);
          }}
          title={item.title}
          latitude={item.latitude}
          longitude={item.longitude}
          url={item.url}
          remove
          favorite
        />
      </S.CardContainer>
    ));

    return added;
  };

  const handleNextDays = () => {
    const NextDays = nextDaysData?.list.splice(0, 5).map((item, index) => (
      <S.EachNextDay
        style={{
          backgroundColor:
            index % 2 !== 0
              ? defaultTheme.colors.lighterBottomTabBlack
              : defaultTheme.colors.bottomTabBlack,
        }}>
        <S.NextDaysWeatherImageContainer>
          <Image
            style={{width: 55, height: 55}}
            source={nextDaysHandleCondition(item.weather[0].description)}
          />
        </S.NextDaysWeatherImageContainer>
        {colorOne ? (
          <S.EachDayInfoGraphContainer>
            <S.EachNextDayInfo>
              {Math.round(item.main.temp_min)}°
            </S.EachNextDayInfo>
            <LineGraph />
            <S.EachNextDayInfo>
              {Math.round(item.main.temp_max)}°
            </S.EachNextDayInfo>
          </S.EachDayInfoGraphContainer>
        ) : (
          <S.EachDayInfoGraphContainer style={{marginRight: 20}}>
            <S.EachNextDayInfoAir>{item.main.humidity}%</S.EachNextDayInfoAir>
            <S.EachNextDayInfoAir>{item.wind.deg}km/h</S.EachNextDayInfoAir>
            <S.EachNextDayInfoAir>{item.main.pressure}</S.EachNextDayInfoAir>
            <S.EachNextDayInfoAir>
              {Math.round(item.main.feels_like)}°
            </S.EachNextDayInfoAir>
          </S.EachDayInfoGraphContainer>
        )}
      </S.EachNextDay>
    ));
    return NextDays;
  };

  return (
    <ImageBackground source={BackgorundImg} style={{flex: 1, zIndex: 100}}>
      <Modalize
        modalStyle={{backgroundColor: defaultTheme.colors.bottomTabBlack}}
        ref={modalizeRef}>
        <S.CloseModalButtonContainer>
          <S.ModalTitle>Locais salvos</S.ModalTitle>
          <S.CloseModalButton onPress={onClose}>
            <AntDesign
              name="close"
              size={20}
              color={defaultTheme.colors.white}
            />
          </S.CloseModalButton>
        </S.CloseModalButtonContainer>
        <S.AddedListContainer>{handleAddedList()}</S.AddedListContainer>
      </Modalize>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Container>
          <S.OpenList onPress={onOpen}>
            <Foundation
              name="indent-more"
              size={20}
              color={defaultTheme.colors.white}
            />
          </S.OpenList>
          <S.CountryTitle>
            {Math.round(data?.coord.lat) !== Math.round(currentLat) &&
            Math.round(data?.coord.lon) !== Math.round(currentLng)
              ? title
              : data.name}
          </S.CountryTitle>
          <S.CalendarTitle>{date}</S.CalendarTitle>
          <S.ChangeButtonsContainer>
            <SmallButton
              title="Previsao"
              onPress={() => {
                setColorOne(true);
                setColorTwo(false);
              }}
              containerStyle={{
                backgroundColor: colorOne
                  ? defaultTheme.colors.darkerBlue
                  : defaultTheme.colors.bottomTabBlack,
              }}
            />
            <SmallButton
              title="Qualidade do ar"
              onPress={() => {
                setColorOne(false);
                setColorTwo(true);
              }}
              containerStyle={{
                backgroundColor: colorTwo
                  ? defaultTheme.colors.darkerBlue
                  : defaultTheme.colors.bottomTabBlack,
              }}
            />
          </S.ChangeButtonsContainer>
          <>
            <S.WeatherImageContainer>
              <Image
                source={handleCondition()}
                style={{width: 230, height: 230}}
              />
            </S.WeatherImageContainer>
            {colorOne ? (
              <>
                <S.InfoContainer>
                  <S.InfoTextContainer>
                    <S.InfoLabel>min</S.InfoLabel>
                    <S.InfoText>{Math.round(data?.main.temp_min)}°</S.InfoText>
                  </S.InfoTextContainer>
                  <S.InfoTextContainer>
                    <S.InfoLabel>Temperatura</S.InfoLabel>
                    <S.InfoText>{Math.round(data?.main.temp)}°</S.InfoText>
                  </S.InfoTextContainer>
                  <S.InfoTextContainer>
                    <S.InfoLabel>max</S.InfoLabel>
                    <S.InfoText>{Math.round(data?.main.temp_max)}°</S.InfoText>
                  </S.InfoTextContainer>
                </S.InfoContainer>
              </>
            ) : (
              <>
                <S.InfoContainer>
                  <S.InfoTextContainer>
                    <S.InfoLabel>Humidade</S.InfoLabel>
                    <S.InfoText>{data?.main.humidity}°</S.InfoText>
                  </S.InfoTextContainer>
                  <S.InfoTextContainer>
                    <S.InfoLabel>Vento</S.InfoLabel>
                    <S.InfoText>{data?.wind.deg}km/h</S.InfoText>
                  </S.InfoTextContainer>
                </S.InfoContainer>
                <S.InfoContainer>
                  <S.InfoTextContainer>
                    <S.InfoLabel>Pressao</S.InfoLabel>
                    <S.InfoText>{data?.main.pressure}</S.InfoText>
                  </S.InfoTextContainer>
                  <S.InfoTextContainer>
                    <S.InfoLabel>Sensacao termica</S.InfoLabel>
                    <S.InfoText>
                      {Math.round(data?.main.feels_like)}°
                    </S.InfoText>
                  </S.InfoTextContainer>
                </S.InfoContainer>
              </>
            )}
            <S.NextDaysLabelContainer>
              <EvilIcons
                style={{marginRight: 5}}
                name="calendar"
                size={15}
                color={defaultTheme.colors.white}
              />
              <S.NextDaysLabel>
                PREVISAO PARA OS PROXIMOS 5 DIAS
              </S.NextDaysLabel>
            </S.NextDaysLabelContainer>
            <S.NextDaysContainer>{handleNextDays()}</S.NextDaysContainer>
          </>
        </S.Container>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
