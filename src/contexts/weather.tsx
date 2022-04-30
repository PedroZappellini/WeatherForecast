import Geolocation from '@react-native-community/geolocation';
import React, {createContext, useEffect, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {Models} from '../interfaces/modules';
import api from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';

interface IWeather {
  callLocation(): Promise<void>;
  data: Models.IData | undefined;
  nextDaysData: Models.INextDaysData | undefined;
  addedList: Models.IAddedList[];
  setAddedList: (addedList: Models.IAddedList[]) => void;
  favorited: boolean;
  setFavorited: (favorited: boolean) => void;
  favoritedList: Models.IAddedList[];
  setFavoritedList: (favoritedList: Models.IAddedList[]) => void;
  id: number;
  setId: (id: string) => void;
  loadCurrentDayApi(lat: number, long: number): Promise<void>;
  loadNextDaysApi(lat: number, long: number): Promise<void>;
  currentLat: number;
  currentLng: number;
}

const WeatherContext = createContext<IWeather>({} as IWeather);

export const WeatherProvider: React.FC = ({children}) => {
  const [data, setData] = useState<Models.IData>();
  const [nextDaysData, setNextDaysData] = useState<Models.INextDaysData>();
  const [favorited, setFavorited] = useState(false);
  const [id, setId] = useState();
  const [addedList, setAddedList] = useState<Models.IAddedList>(
    [] as Models.IAddedList,
  );
  const [favoritedList, setFavoritedList] = useState<Models.IAddedList>(
    [] as Models.IAddedList,
  );
  const [currentLat, setCurrentLat] = useState('');
  const [currentLng, setCurrentLng] = useState('');
  const [saveList, setSaveList] = useState([]);
  const [saveFavoritedList, setSaveFavoritedList] = useState([]);

  useEffect(() => {
    async () => {
      const activeList = await AsyncStorage.getItem(JSON.stringify(addedList));
      const activeFavoriteList = await AsyncStorage.getItem(
        JSON.stringify(favoritedList),
      );

      if (activeList) {
        setSaveList(activeList);
        return;
      }
      if (activeFavoriteList) {
        setSaveFavoritedList(activeFavoriteList);
        return;
      }
    };
  }, []);

  const callLocation = () => {
    if (Platform.OS === 'ios') {
      getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissao de acesso a localizacao',
            message: 'Este aplicativo precisa acessar sua localizacao',
            buttonNegative: 'Negar',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          console.warn('Permissao de localizacao negada');
        }
      };
      requestLocationPermission();
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLatitude = JSON.stringify(position.coords.latitude);
        setCurrentLat(currentLatitude);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        setCurrentLng(currentLongitude);
        loadCurrentDayApi(currentLatitude, currentLongitude);
        loadNextDaysApi(currentLatitude, currentLongitude);
      },
      error => console.warn(error.message),
      {enableHighAccuracy: true, timeout: 5000, maximumAge: 1000},
    );
  };

  const loadCurrentDayApi = async (latitude: string, longitude: string) => {
    const forecastResponse = await api.get(
      `weather?lat=${latitude}&lon=${longitude}&appid=f215683b90660b0ec5f5f7706c276982&units=metric`,
    );
    setData(forecastResponse.data);
  };

  const loadNextDaysApi = async (latitude: string, longitude: string) => {
    const forecastNextDaysResponse = await api.get(
      `forecast?lat=${latitude}&lon=${longitude}&appid=f215683b90660b0ec5f5f7706c276982&units=metric`,
    );
    setNextDaysData(forecastNextDaysResponse.data);
  };

  return (
    <WeatherContext.Provider
      value={{
        callLocation,
        data,
        nextDaysData,
        addedList,
        setAddedList,
        favorited,
        setFavorited,
        favoritedList,
        setFavoritedList,
        id,
        setId,
        loadCurrentDayApi,
        loadNextDaysApi,
        currentLat,
        currentLng,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
