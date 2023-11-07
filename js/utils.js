
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

export { getRandomPositiveInteger, getRandomArrayElements, getRandomArrayElement, getRandomFloat, shuffle };
