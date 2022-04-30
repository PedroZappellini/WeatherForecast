import React, {useContext, useEffect} from 'react';

import Button from '../../components/Buttons';
import WeatherLogo from '../../assets/Logo.png';
import BackgroundImg from '../../assets/background/Background.png';
import WeatherContext from '../../contexts/weather';

import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import {Image, ImageBackground} from 'react-native';

const InitialScreen: React.FC = () => {
  const navigation = useNavigation();
  const {callLocation} = useContext(WeatherContext);

  return (
    <ImageBackground source={BackgroundImg} style={{flex: 1, zIndex: 100}}>
      <S.Container>
        <Image source={WeatherLogo} />
        <S.Title>Descubra como esta o clima em sua cidade</S.Title>
        <S.Description>
          Descubra qual é a previsão do tempo de onde quiser, fica mais facil
          para se programar!
        </S.Description>
        <Button
          onPress={() => {
            callLocation();
            navigation.navigate('Home');
          }}
          title="INICIAR"
        />
      </S.Container>
    </ImageBackground>
  );
};

export default InitialScreen;
