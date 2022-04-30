export declare module Models {
  interface Clouds {
    all: number;
  }

  interface Coord {
    lat: number;
    lon: number;
  }

  interface Main {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  }

  interface Sys {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  }

  interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
  }

  interface Wind {
    deg: number;
    gust: number;
    speed: number;
  }

  interface IData {
    base: string;
    clouds: Clouds;
    cod: number;
    coord: Coord;
    dt: number;
    id: number;
    main: Main;
    name: string;
    sys: Sys;
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: Wind;
  }

  interface Main {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }

  interface Weather {
    main: string;
    description: string;
  }

  interface Wind {
    deg: number;
  }

  interface List {
    main: Main;
    weather: Weather[];
    wind: Wind;
  }

  interface INextDaysData {
    list: List[];
  }

  interface IAddedList {
    id: number;
    title: string;
    latitude: number;
    longitude: number;
    url: string;
  }
}
