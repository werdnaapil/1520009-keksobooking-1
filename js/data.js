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
  'Просторная уютная студия',
  'Двухместный номер с видом на море',
  'Аппартаменты для двоих',
  'Семейный номер с кухней',
  'Одноместный номер стандарт',
  'Номер с двухспальной кроватью и окном',
  'Студия в центре города',
  'Двухкомнатная квартира',
  'Номер с балконом',
  'Номер Люкс',
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
const PHOTOADDRESSES = [
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

//создаем массив для описания отелей
const places = (index) => ({
  author: {
    avatar: `img/avatars/user${`${index}`.padStart(2, '0')}.png`,
  },
  offer: {
    title: getRandomArrayElement(TITLES),
    address: getRandomFloat(35.65000, 35.70000, 5),
    price: getRandomPositiveInteger(900, 8000),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomPositiveInteger(1, 4),
    guests: getRandomPositiveInteger(1, 8),
    checkin: getRandomArrayElement(CHECKTIME),
    checkout: getRandomArrayElement(CHECKTIME),
    features: getRandomArrayElements(shuffle(FEATURESNAMES)),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getRandomArrayElement(PHOTOADDRESSES),
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
