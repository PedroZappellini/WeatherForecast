import React, {useContext, useState} from 'react';
import {Image, Linking} from 'react-native';
import LocalizationIcon from '../../assets/placesLocalization/Localization.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as S from './styles';
import defaultTheme from '../../themes';
import WeatherContext from '../../contexts/weather';

interface ICard {
  title: string;
  latitude: number;
  longitude: number;
  url: string;
  remove?: boolean;
  add?: boolean;
  favorite?: boolean;
  disabled?: boolean;
  onPress?(): () => void;
  onUnpressedFavoriteIcon?(): () => void;
  onPressedFavoriteIcon?(): () => void;
}

const PlacesCard: React.FC<ICard> = ({
  title,
  latitude,
  longitude,
  url,
  remove,
  add,
  favorite,
  disabled,
  onPress,
  onUnpressedFavoriteIcon,
  onPressedFavoriteIcon,
}) => {
  const {
    addedList,
    setAddedList,
    setFavorited,
    favorited,
    setFavoritedList,
    favoritedList,
    id,
  } = useContext(WeatherContext);
  const [favoriteColor, setFavoriteColor] = useState(false);
  const [added, setAdded] = useState(false);

  const handleHeartClick = () => {
    const selected = addedList.map(item => (
      <S.TouchableIcons
        style={{position: 'absolute', top: 40, right: 0}}
        key={item.id}>
        {!favorited ? (
          <MaterialIcons
            onPress={() => {
              onUnpressedFavoriteIcon;
              addToFavorites();
              setFavorited(true);
            }}
            name="favorite-outline"
            size={25}
            color={defaultTheme.colors.white}
          />
        ) : (
          <MaterialIcons
            onPress={() => {
              onPressedFavoriteIcon;
              addToFavorites();
              setFavorited(false);
            }}
            name="favorite"
            size={25}
            color={defaultTheme.colors.pink}
          />
        )}
      </S.TouchableIcons>
    ));
    return selected;
  };

  const addToList = () => {
    let item = {
      id: id,
      title: title,
      latitude: latitude,
      longitude: longitude,
      url: url,
    };

    setAddedList([...addedList, item]);
    setAdded(true);
  };

  const removeToList = () => {
    const removed = addedList.filter(item => item.id !== addedList[0].id);
    setAddedList(removed);
    setAdded(false);
  };

  const addToFavorites = () => {
    let item = {
      id: id,
      title: title,
      latitude: latitude,
      longitude: longitude,
      url: url,
    };

    setFavoritedList([...favoritedList, item]);
    setFavorited(state => !state);
  };

  return (
    <S.TouchableContainer
      disabled={disabled}
      remove={remove}
      add={add}
      favorite={favorite}
      onPress={onPress}>
      <Image
        source={LocalizationIcon}
        style={{width: 45, height: 45, marginTop: 10}}
      />
      <S.InfoContainer>
        <S.Title>{title}</S.Title>
        <S.CoordsContainer>
          <S.Latitude>lat: {latitude}</S.Latitude>
          <S.Longitude>long: {longitude}</S.Longitude>
        </S.CoordsContainer>
        <S.GoToMapsContainer>
          <S.GoToMapsText
            onPress={() => {
              Linking.openURL(url);
            }}>
            ABRIR COM GOOGLE MAPS
          </S.GoToMapsText>
          <MaterialIcons
            name="open-in-new"
            color={defaultTheme.colors.darkerBlue}
            size={15}
          />
        </S.GoToMapsContainer>
      </S.InfoContainer>
      <S.IconsContainer>
        {remove ? (
          <S.TouchableIcons onPress={removeToList}>
            <Ionicons
              name="remove-circle-outline"
              size={25}
              color={defaultTheme.colors.white}
            />
          </S.TouchableIcons>
        ) : (
          <></>
        )}
        {add ? (
          <S.TouchableIcons onPress={addToList}>
            {!added ? (
              <Ionicons
                name="add-circle-outline"
                size={25}
                color={defaultTheme.colors.white}
              />
            ) : (
              <MaterialIcons
                name="done"
                size={25}
                color={defaultTheme.colors.white}
              />
            )}
          </S.TouchableIcons>
        ) : (
          <></>
        )}
        {favorite ? handleHeartClick() : <></>}
      </S.IconsContainer>
    </S.TouchableContainer>
  );
};

export default PlacesCard;
