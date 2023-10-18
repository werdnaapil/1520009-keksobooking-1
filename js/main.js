//Создаем функцию получени случайного положительного числа из указанного диапазона
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
//создаем функцию которая возвращает случайный эллемент массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];


//создаем функцию для указания координат с плавающей точкой
function getRandomFloat(min, max, decimals) {
  if (min < 0 || max < 0) {
    return Number.NaN;
  }
  if (max <= min) {
    return Number.NaN;
  }
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return (Math.random() * (max - min) + min).toFixed(decimals);
}

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

//создаем функцию вывода данных из массива с проверкой на уникальность
function shuffle(array) {
  const newArray = [];

  while(newArray.length < array.length) {
    const index = getRandomPositiveInteger(0, array.length - 1);
    const element = array[index];
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  }

  return newArray;
}
// const getRandomIdFromMassive = createRandomIdFromRangeMassive(1, 3);

const getRandomArrayElements = (array) => array.slice(0, getRandomPositiveInteger(0, array.length - 1));

// const SIMILAR_LAT_COUNT = (35.65000, 35.70000);
// const SIMILAR_LNG_COUNT = (139.70000, 139.80000);
// const SIMILAR_AVATAR_COUNT = (1, 10);


// const num = getRandomPositiveInteger(1, 10);
// const numStr = `${num}`.padStart(2, '0');
// img/avatars/user/01.png
// img/avatars/user/02.png

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

const getPlaces = () => Array.from({length: 10}, (_, index) => places(index + 1));

// eslint-disable-next-line
 console.log(getPlaces());
