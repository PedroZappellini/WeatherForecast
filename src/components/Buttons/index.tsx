import React from 'react';
import {View} from 'react-native';

import * as S from './styles';

interface IButton {
  title: string;
  onPress: () => void;
}

const Buttons: React.FC<IButton> = ({title, onPress}) => {
  return (
    <S.Container>
      <S.Button onPress={onPress}>
        <S.ButtonText>{title}</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default Buttons;
