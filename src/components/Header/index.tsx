import React from 'react';
import {View} from 'react-native';

import * as S from './styles';

interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({title}) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Header;
