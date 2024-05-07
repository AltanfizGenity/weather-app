import clear from "../assets/clear.jpg";
import partlyCloudy from "../assets/partly-cloudy.jpg";
import cloudy from "../assets/cloudy.jpg";
import rainy from "../assets/rainy.jpg";
import snowy from "../assets/snowy.jpg";
import mist from "../assets/misty.jpg";
import thunderstorm from "../assets/thunderstorm.jpg";
import overcast from "../assets/overcast.jpg";
import blizzard from "../assets/blizzard.jpg";

export const conditionData = [
  { code: [1000], img: clear },
  { code: [1003], img: partlyCloudy },
  { code: [1006], img: cloudy },
  { code: [1009], img: overcast },
  { code: [1030, 1135, 1147], img: mist },
  {
    code: [
      1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201,
      1240, 1243, 1246, 1249, 1252,
    ],
    img: rainy,
  },
  {
    code: [
      1066, 1069, 1072, 1150, 1153, 1168, 1204, 1207, 1210,
      1216, 1219, 1222, 1225, 1237, 1255, 1258, 1261, 1264,
    ],
    img: snowy,
  },
  {
    code: [1087, 1273, 1276, 1279, 1282],
    img: thunderstorm,
  },
  { code: [1114, 1117, 1171], img: blizzard },
];
