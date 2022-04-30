import React, {useContext} from 'react';
import {ImageBackground} from 'react-native';
import Header from '../../components/Header';
import BackgorundImg from '../../assets/background/Background.png';
import * as S from './styles';
import PlacesCard from '../../components/PlacesCard';
import WeatherContext from '../../contexts/weather';

const FavoriteScreen: React.FC = () => {
  const {addedList, favorited} = useContext(WeatherContext);

  const handleList = () => {
    if (favorited === true) {
      const favorites = addedList.map(item => (
        <S.SingleCardContainer>
          <PlacesCard
            favorite
            title={item.title}
            latitude={item.latitude}
            longitude={item.longitude}
            url={item.url}
          />
        </S.SingleCardContainer>
      ));
      return favorites;
    }
  };

  return (
    <ImageBackground source={BackgorundImg} style={{flex: 1, zIndex: 100}}>
      <S.Container>
        <Header title="Favoritos" />
        <S.CardContainer>{handleList()}</S.CardContainer>
      </S.Container>
    </ImageBackground>
  );
};

export default FavoriteScreen;
