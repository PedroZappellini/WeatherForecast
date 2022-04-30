import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import * as S from './styles';

interface IButton {
  title: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const SmallButton: React.FC<IButton> = ({title, onPress, containerStyle}) => {
  return (
    <S.Button style={containerStyle} onPress={onPress}>
      <S.ButtonText>{title}</S.ButtonText>
    </S.Button>
  );
};

export default SmallButton;
