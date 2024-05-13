import { weatherConditionIcon } from './IconData';

const imgRelativePath = '../assets/weather-background-image/';

function getImgUrl(name) {
  return new URL(`${imgRelativePath}${name}`, import.meta.url).href;
}

export const conditionData = [
  { code: [1000], img: getImgUrl('clear.jpg') },
  { code: [1003], img: getImgUrl('partly-cloudy.jpg') },
  { code: [1006], img: getImgUrl('cloudy.jpg') },
  { code: [1009], img: getImgUrl('overcast.jpg') },
  { code: [1030, 1135, 1147], img: getImgUrl('mist.jpg') },
  {
    code: [1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246, 1249, 1252],
    img: getImgUrl('rainy.jpg'),
  },
  {
    code: [1066, 1069, 1072, 1150, 1153, 1168, 1204, 1207, 1210, 1216, 1219, 1222, 1225, 1237, 1255, 1258, 1261, 1264],
    img: getImgUrl('snowy.jpg'),
  },
  {
    code: [1087, 1273, 1276, 1279, 1282],
    img: getImgUrl('thunderstorm.jpg'),
  },
  { code: [1114, 1117, 1171], img: getImgUrl('blizzard.jpg') },
];

export const iconConditionData = [
  {
    code: 1000,
    condition: {
      day: 'Sunny',
      night: 'Clear',
    },
    icon: {
      day: weatherConditionIcon.sun,
      night: weatherConditionIcon.moonClear,
    },
  },
  {
    code: 1003,
    condition: {
      day: 'Partly cloudy',
      night: 'Partly cloudy',
    },
    icon: {
      day: weatherConditionIcon.sunCloudy,
      night: weatherConditionIcon.moonCloudy,
    },
  },
  {
    code: 1006,
    condition: {
      day: 'Cloudy',
      night: 'Cloudy',
    },
    icon: {
      day: weatherConditionIcon.cloudy,
      night: weatherConditionIcon.cloudy,
    },
  },
  {
    code: 1009,
    condition: {
      day: 'Overcast',
      night: 'Overcast',
    },
    icon: {
      day: weatherConditionIcon.cloudy,
      night: weatherConditionIcon.cloudy,
    },
  },
  {
    code: 1030,
    condition: {
      day: 'Mist',
      night: 'Mist',
    },
    icon: {
      day: weatherConditionIcon.mist,
      night: weatherConditionIcon.mist,
    },
  },
  {
    code: 1063,
    condition: {
      day: 'Patchy rain possible',
      night: 'Patchy rain possible',
    },
    icon: {
      day: weatherConditionIcon.drizzle,
      night: weatherConditionIcon.drizzle,
    },
  },
  {
    code: 1066,
    condition: {
      day: 'Patchy snow possible',
      night: 'Patchy snow possible',
    },
    icon: {
      day: weatherConditionIcon.hail,
      night: weatherConditionIcon.hail,
    },
  },
  {
    code: 1069,
    condition: {
      day: 'Patchy sleet possible',
      night: 'Patchy sleet possible',
    },
    icon: {
      day: weatherConditionIcon.hail,
      night: weatherConditionIcon.hail,
    },
  },
  {
    code: 1072,
    condition: {
      day: 'Patchy freezing drizzle possible',
      night: 'Patchy freezing drizzle possible',
    },
    icon: {
      day: weatherConditionIcon.snowy,
      night: weatherConditionIcon.snowy,
    },
  },
  {
    code: 1087,
    condition: {
      day: 'Thundery outbreaks possible',
      night: 'Thundery outbreaks possible',
    },
    icon: {
      day: weatherConditionIcon.thunderstorms,
      night: weatherConditionIcon.thunderstorms,
    },
  },
  {
    code: 1114,
    condition: {
      day: 'Blowing snow',
      night: 'Blowing snow',
    },
    icon: {
      day: weatherConditionIcon.snowy,
      night: weatherConditionIcon.snowy,
    },
  },
  {
    code: 1117,
    condition: {
      day: 'Blizzard',
      night: 'CleBlizzardar',
    },
    icon: {
      day: weatherConditionIcon.snowflake,
      night: weatherConditionIcon.snowflake,
    },
  },
  {
    code: 1135,
    condition: {
      day: 'Fog',
      night: 'Fog',
    },
    icon: {
      day: weatherConditionIcon.foggy,
      night: weatherConditionIcon.moonFoggy,
    },
  },
  {
    code: 1147,
    condition: {
      day: 'Freezing fog',
      night: 'Freezing fog',
    },
    icon: {
      day: weatherConditionIcon.foggy,
      night: weatherConditionIcon.moonFoggy,
    },
  },
  {
    code: 1150,
    condition: {
      day: 'Patchy light drizzle',
      night: 'Patchy light drizzle',
    },
    icon: {
      day: weatherConditionIcon.drizzle,
      night: weatherConditionIcon.drizzle,
    },
  },
  {
    code: 1153,
    condition: {
      day: 'Light drizzle',
      night: 'Light drizzle',
    },
    icon: {
      day: weatherConditionIcon.drizzle,
      night: weatherConditionIcon.drizzle,
    },
  },
  {
    code: 1168,
    condition: {
      day: 'Freezing drizzle',
      night: 'Freezing drizzle',
    },
    icon: {
      day: weatherConditionIcon.hail,
      night: weatherConditionIcon.hail,
    },
  },
  {
    code: 1171,
    condition: {
      day: 'Heavy freezing drizzle',
      night: 'Heavy freezing drizzle',
    },
    icon: {
      day: weatherConditionIcon.hail,
      night: weatherConditionIcon.hail,
    },
  },
  {
    code: 1180,
    condition: {
      day: 'Patchy light rain',
      night: 'Patchy light rain',
    },
    icon: {
      day: weatherConditionIcon.rainy,
      night: weatherConditionIcon.rainy,
    },
  },
  {
    code: 1183,
    condition: {
      day: 'Light rain',
      night: 'Light rain',
    },
    icon: {
      day: weatherConditionIcon.rainy,
      night: weatherConditionIcon.rainy,
    },
  },
  {
    code: 1186,
    condition: {
      day: 'Moderate rain at times',
      night: 'Moderate rain at times',
    },
    icon: {
      day: weatherConditionIcon.rainy,
      night: weatherConditionIcon.rainy,
    },
  },
  {
    code: 1189,
    condition: {
      day: 'Moderate rain',
      night: 'Moderate rain',
    },
    icon: {
      day: weatherConditionIcon.rainy,
      night: weatherConditionIcon.rainy,
    },
  },
  {
    code: 1192,
    condition: {
      day: 'Heavy rain at times',
      night: 'Heavy rain at times',
    },
    icon: {
      day: weatherConditionIcon.heavyShower,
      night: weatherConditionIcon.heavyShower,
    },
  },
  {
    code: 1195,
    condition: {
      day: 'Heavy rain at times',
      night: 'Heavy rain at times',
    },
    icon: {
      day: weatherConditionIcon.heavyShower,
      night: weatherConditionIcon.heavyShower,
    },
  },
  {
    code: 1198,
    condition: {
      day: 'Light freezing rain',
      night: 'Light freezing rain',
    },
    icon: {
      day: weatherConditionIcon.hail,
      night: weatherConditionIcon.hail,
    },
  },
  {
    code: 1201,
    condition: {
      day: 'Moderate or heavy freezing rain',
      night: 'Moderate or heavy freezing rain',
    },
    icon: {
      day: weatherConditionIcon.snowy,
      night: weatherConditionIcon.snowy,
    },
  },
  {
    code: 1204,
    condition: {
      day: 'Light sleet',
      night: 'Light sleet',
    },
    icon: {
      day: weatherConditionIcon.hail,
      night: weatherConditionIcon.hail,
    },
  },
  {
    code: 1207,
    condition: {
      day: 'Moderate or heavy sleet',
      night: 'Moderate or heavy sleet',
    },
    icon: {
      day: weatherConditionIcon.snowy,
      night: weatherConditionIcon.snowy,
    },
  },
  {
    code: 1210,
    condition: {
      day: 'Patchy light snow',
      night: 'Patchy light snow',
    },
    icon: {
      day: weatherConditionIcon.hail,
      night: weatherConditionIcon.hail,
    },
  },
  {
    code: 1213,
    condition: {
      day: 'Light snow',
      night: 'Light snow',
    },
    icon: {
      day: weatherConditionIcon.hail,
      night: weatherConditionIcon.hail,
    },
  },
  {
    code: 1216,
    condition: {
      day: 'Patchy moderate snow',
      night: 'Patchy moderate snow',
    },
    icon: {
      day: weatherConditionIcon.snowy,
      night: weatherConditionIcon.snowy,
    },
  },
  {
    code: 1219,
    condition: {
      day: 'Moderate snow',
      night: 'Moderate snow',
    },
    icon: {
      day: weatherConditionIcon.snowy,
      night: weatherConditionIcon.snowy,
    },
  },
  {
    code: 1222,
    condition: {
      day: 'Patchy heavy snow',
      night: 'Patchy heavy snow',
    },
    icon: {
      day: weatherConditionIcon.snowflake,
      night: weatherConditionIcon.snowflake,
    },
  },
  {
    code: 1225,
    condition: {
      day: 'Heavy snow',
      night: 'Heavy snow',
    },
    icon: {
      day: weatherConditionIcon.snowflake,
      night: weatherConditionIcon.snowflake,
    },
  },
  {
    code: 1237,
    condition: {
      day: 'Ice pellets',
      night: 'Ice pellets',
    },
    icon: {
      day: weatherConditionIcon.hail,
      night: weatherConditionIcon.hail,
    },
  },
  {
    code: 1240,
    condition: {
      day: 'Light rain shower',
      night: 'Light rain shower',
    },
    icon: {
      day: weatherConditionIcon.showers,
      night: weatherConditionIcon.showers,
    },
  },
  {
    code: 1243,
    condition: {
      day: 'Moderate or heavy rain shower',
      night: 'Moderate or heavy rain shower',
    },
    icon: {
      day: weatherConditionIcon.heavyShower,
      night: weatherConditionIcon.heavyShower,
    },
  },
  {
    code: 1246,
    condition: {
      day: 'Torrential rain shower',
      night: 'Torrential rain shower',
    },
    icon: {
      day: weatherConditionIcon.showers,
      night: weatherConditionIcon.showers,
    },
  },
  {
    code: 1249,
    condition: {
      day: 'Light sleet showers',
      night: 'Light sleet showers',
    },
    icon: {
      day: weatherConditionIcon.hail,
      night: weatherConditionIcon.hail,
    },
  },
  {
    code: 1252,
    condition: {
      day: 'Moderate or heavy sleet showers',
      night: 'Moderate or heavy sleet showers',
    },
    icon: {
      day: weatherConditionIcon.snowy,
      night: weatherConditionIcon.snowy,
    },
  },
  {
    code: 1255,
    condition: {
      day: 'Light snow showers',
      night: 'Light snow showers',
    },
    icon: {
      day: weatherConditionIcon.snowy,
      night: weatherConditionIcon.snowy,
    },
  },
  {
    code: 1258,
    condition: {
      day: 'Moderate or heavy snow showers',
      night: 'Moderate or heavy snow showers',
    },
    icon: {
      day: weatherConditionIcon.snowflake,
      night: weatherConditionIcon.snowflake,
    },
  },
  {
    code: 1261,
    condition: {
      day: 'Light showers of ice pellets',
      night: 'Light showers of ice pellets',
    },
    icon: {
      day: weatherConditionIcon.hail,
      night: weatherConditionIcon.hail,
    },
  },
  {
    code: 1264,
    condition: {
      day: 'Moderate or heavy showers of ice pellets',
      night: 'Moderate or heavy showers of ice pellets',
    },
    icon: {
      day: weatherConditionIcon.snowflake,
      night: weatherConditionIcon.snowflake,
    },
  },
  {
    code: 1273,
    condition: {
      day: 'Patchy light rain with thunder',
      night: 'Patchy light rain with thunder',
    },
    icon: {
      day: weatherConditionIcon.thunderstorms,
      night: weatherConditionIcon.thunderstorms,
    },
  },
  {
    code: 1276,
    condition: {
      day: 'Moderate or heavy rain with thunder',
      night: 'Moderate or heavy rain with thunder',
    },
    icon: {
      day: weatherConditionIcon.flashlight,
      night: weatherConditionIcon.flashlight,
    },
  },
  {
    code: 1279,
    condition: {
      day: 'Patchy light snow with thunder',
      night: 'Patchy light snow with thunder',
    },
    icon: {
      day: weatherConditionIcon.thunderstorms,
      night: weatherConditionIcon.thunderstorms,
    },
  },
  {
    code: 1282,
    condition: {
      day: 'Moderate or heavy snow with thunder',
      night: 'Moderate or heavy snow with thunder',
    },
    icon: {
      day: weatherConditionIcon.flashlight,
      night: weatherConditionIcon.flashlight,
    },
  },
];
