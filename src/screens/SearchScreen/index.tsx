import React, {useContext, useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';
import BackgorundImg from '../../assets/background/Background.png';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import config from '../../configs/index.json';
import * as S from './styles';
import defaultTheme from '../../themes';
import PlacesCard from '../../components/PlacesCard';

interface ILocation {
  lat: number;
  lng: number;
}

interface IGeometry {
  location: ILocation;
}

interface IDetails {
  formatted_address: string;
  geometry: IGeometry;
  name: string;
  url: string;
}

const SearchScreen: React.FC = () => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [url, setUrl] = useState();
  const [name, setName] = useState('');
  const [formatedName, setFormatedName] = useState('');
  const [listenText, setListenText] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [details, setDetails] = useState<IDetails>({} as IDetails);

  useEffect(() => {
    if (showCard) {
      setLat(details?.geometry.location.lat);
      setLng(details?.geometry.location.lng);
      setFormatedName(details?.formatted_address);
      setListenText(formatedName);
      setName(details?.name);
      setUrl(details?.url);
    }
  }, [showCard, formatedName, details]);

  return (
    <ImageBackground source={BackgorundImg} style={{flex: 1, zIndex: 100}}>
      <S.Container>
        <GooglePlacesAutocomplete
          onPress={(data, details) => {
            console.log(details, 'UHAUHASUHASHU');
            setDetails(details);
            setShowCard(true);
          }}
          placeholder="Buscar..."
          textInputProps={{
            placeholderTextColor: defaultTheme.colors.white,
            onChangeText: setListenText,
          }}
          query={{
            key: config.googleApi,
            language: 'pt-br',
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          styles={{
            textInput: {
              backgroundColor: defaultTheme.colors.bottomTabBlack,
              color: defaultTheme.colors.white,
              fontFamily: defaultTheme.fonts.medium,
            },
            listView: {height: 100, zIndex: 100},
            description: {
              backgroundColor: defaultTheme.colors.bottomTabBlack,
              color: defaultTheme.colors.white,
              fontFamily: defaultTheme.fonts.medium,
            },
            row: {
              backgroundColor: defaultTheme.colors.bottomTabBlack,
              marginBottom: 0,
            },
          }}
        />
        <S.CardContainer>
          {showCard && listenText === formatedName ? (
            <PlacesCard
              disabled
              title={name}
              latitude={Math.round(lat)}
              longitude={Math.round(lng)}
              url={url}
              add
              favorite
            />
          ) : (
            <></>
          )}
        </S.CardContainer>
      </S.Container>
    </ImageBackground>
  );
};

export default SearchScreen;
