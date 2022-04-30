import React from 'react';
import {ImageBackground} from 'react-native';
import Header from '../../components/Header';
import BackgorundImg from '../../assets/background/Background.png';
import * as S from './styles';

const SettingsScreen: React.FC = () => {
  return (
    <ImageBackground source={BackgorundImg} style={{flex: 1, zIndex: 100}}>
      <S.Container>
        <Header title="Configuracoes" />
      </S.Container>
    </ImageBackground>
  );
};

export default SettingsScreen;
