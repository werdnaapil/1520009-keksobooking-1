
function isPalindrom(string) {
  const normalizedString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reversedString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString.at(i);
  }
  return normalizedString === reversedString;
}
// eslint-disable-next-line
console.log(isPalindrom('Ро тор'));
// eslint-disable-next-line
console.log(isPalindrom('Лёша на полке клопа нашёл'));
// eslint-disable-next-line
console.log(isPalindrom('кекс'));
// eslint-disable-next-line
console.log(isPalindrom('ДоВод'));
// eslint-disable-next-line
console.log(isPalindrom('Deed'));
// eslint-disable-next-line
console.log(isPalindrom('Пекарь'));
// eslint-disable-next-line
console.log(isPalindrom('SaGas'));
//   let normalizedString = string          //объявляем новую переменную присваиваем значение строки
//     .replaceAll(' ', '')                    //убираем пробелы, заменяем пробелы отсутствием расстояния
//     .toLowerCase();                        //приводим предложение к нижнему регистру
//   let reversedString = normalizedString  //объявляем новую переменную строка для проверки строки наоборот
//     .split('')                             //методом split возвращаем массив без пробелов
//     .reverse()                             //переворачиваем строку
//     .join(''); //                          //объединяем полученный массив в строку без пробелов
//   return reversedString === normalizedString  //приводим строгое сравнение строк для получения булева рез-та
// }
// console.log(isPalindrom('Ро тор'));
// console.log(isPalindrom('Лёша на полке клопа нашёл'));
// console.log(isPalindrom('кекс'));
// console.log(isPalindrom('ДоВод'));
// console.log(isPalindrom('Deed'));
// console.log(isPalindrom('Пекарь'));
// console.log(isPalindrom('SaGas'));

/* 2.Задание - функция которая принимает строку,
извлекает содержащиеся цифры и возвращает в виде целого положительного числа */

// eslint-disable-next-line no-unused-vars
function extractNumber(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
}
/* 3. Задание - Функция, которая принимает три параметра: исходную строку, минимальную длину
и строку с добавочными символами — и возвращает исходную строку, дополненную указанными
символами до заданной длины. Символы добавляются в начало строки. Если исходная строка
превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная,
она обрезается с конца */

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad
    / pad.length) + string;
};
//myPadStart('1', 2, '0');
//myPadStart('1', 4, '0');
//myPadStart('q', 4, 'werty');
//myPadStart('q', 4, 'we');
myPadStart('qwerty', 4, '0');

/* 4. Задание - Функция, возвращающая случайное число с плавающей точкой из переданного
диапазона включительно */
/* Нужна твоя помощь:
Есть условие что числа должны быть положительными, не могу придумать как организовать
Как вернуть NaN если пришли некорректные данные
Настроить реакцию если буде указан диапазон так что первое число меньше второго */

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
// eslint-disable-next-line
console.log('getRandomFloat:', getRandomFloat(1.1, 1.2, 4));

// console.log('i=', i, 'element=', userData[i]);


// const places = [
//   {
//     author: {
//       avatar: "..."
//     },
//     offer: {
//       title: '..',
//     }
//   },
//   {
//     author: {
//       avatar: "..."
//     },
//     offer: {
//       title: '..',
//     }
//   }
// ];

// a += b;
// a = a + b;

// for(let i = 0; i < 50; i++) {
//   if (i === 30) {
//     // return;
//     // break;
//   } else ()
// }

// [1,2,3,4,5].forEach((value, index) => {
//   if (index === 1) {
//     return;
//   }
// });

// const fn1 = (p1, p2) => {};
// function fn2(p1, p2) {}

// const add = (condition, a, b) => [].filter().sort().forEach();
