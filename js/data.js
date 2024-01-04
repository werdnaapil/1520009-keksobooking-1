import { getRandomPositiveInteger, getRandomArrayElements, getRandomFloat, getRandomArrayElement, shuffle } from './utils.js';

const DESCRIPTIONS = [
  'Стильный номер в формате лофт, здесь вы себя будете чувствовать как в современном музее',
  'Наш отель расположен в удобом районе города в шаговой доступности от метро',
  'В наших номерах вы сможете расположиться с комфортом для себя и всей семьи',
  'Гостинница имеет 3 звезды, мы создаем тепло и уют для наших гостей',
  'В номерах нашего отеля вы найдет всё необходимое для проживания',
  'У нас в отеле имеется спортзал и бассейн',
  'В наших номерах отличые виды из окна на реку и проплывающие по ней корабли',
];

//создаем массив заголовков для объявлений
const TITLES = [
];

//создаем массив для типов жилья
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

//сооздаем массив возможного времени заезда\выезда
const CHECKTIME = [
  '12:00',
  '13:00',
  '14:00',
];

//создаем массив для строк с фото
const PHOTOLINKS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

//создаем массив с фичами
const FEATURESNAMES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

//cjздаем массив с адресами
const ADDRESSES = [
  '102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō',
  'Chiyoda-ku, Tōkyō-to 102-0082',
  'Chiyoda-ku, Tōkyō-to 102-0091',
  '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 17−4',
  '102-0081 Tōkyō-to, Chiyoda-ku, Yonbanchō, 5−6',
  '102-0094 Tōkyō-to, Chiyoda-ku, Kioichō, 3',
  '102-0080 Tōkyō-to, Chiyoda-ku, 14-7',
  '105-0016 Tōkyō-to, Chiyoda-ku, 14-9',
  '1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111',
  '105-0003 Tōkyō-to, Minato-ku, Nishishinbashi, 2 Chome−3',
  '102-0081 Tōkyō-to, Chiyoda-ku, Yonbanchō, 5−6',
  '105-0016 Tōkyō-to, Minato-ku',
  '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3',
  '105-0003 Tōkyō-to, Chiyoda-ku, Ichibanchō',
];

//создаем массив для описания отелей
const places = (index) => ({
  author: {
    avatar: `img/avatars/user${`${index}`.padStart(2, '0')}.png`,
  },
  offer: {
    title: getRandomArrayElement(TITLES),
    address: getRandomFloat(35.65000, 35.70000, 5),
    price: getRandomArrayElement(ADDRESSES),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomPositiveInteger(1, 4),
    guests: getRandomPositiveInteger(1, 8),
    checkin: getRandomArrayElement(CHECKTIME),
    checkout: getRandomArrayElement(CHECKTIME),
    features: getRandomArrayElements(shuffle(FEATURESNAMES)),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: PHOTOLINKS, //getRandomArrayElement(PHOTOLINKS),
  },
  location: {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  },
});

// eslint-disable-next-line
//console.log(getPlaces());

const getPlaces = () => Array.from({length: 10}, (_, index) => places(index + 1));

// eslint-disable-next-line
//console.log(getPlaces());

export { getPlaces };
