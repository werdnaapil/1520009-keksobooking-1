
//1. Задание - Функция проверки является ли строка палиндромом
//функция может принимать строку в разном регистре
//Функция может содержать пробелы
//Перед проверкой нужно подготовить строку, убрать пробелы, привести в олин регистр

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
window.console.log(isPalindrom('Ро тор'));
window.console.log(isPalindrom('Лёша на полке клопа нашёл'));
window.console.log(isPalindrom('кекс'));
window.console.log(isPalindrom('ДоВод'));
window.console.log(isPalindrom('Deed'));
window.console.log(isPalindrom('Пекарь'));
window.console.log(isPalindrom('SaGas'));


// Глянул в интернете более простое решение,
// вроде результат есть но мы еще реверс массивов не проходили

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

function extractNumber(arg) {
  const string = arg.toString();
  //объявляем пустую переменную для записи результатов
  let result = '';
  //заводим счетчик посчитаем длину строки посимвольно
  for (let i = 0; i < string.length; i++) {
    //проверяем результат parsInt является ли NaN
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      //записываем результат проверки в переменную, если не равно Nan, если NaN то не запишется
      result += string.at(i);
    }
  }
  return (parseInt(result, 10)); //возвращаем результат из строки в виде целых чисел в десятично исчислении
}
window.console.log(extractNumber('2023 год'));
window.console.log(extractNumber('ECMAScript 2022'));
window.console.log(extractNumber('1 кефир, 0.5 батона'));
window.console.log(extractNumber('агент 007'));
window.console.log(extractNumber('а я томат'));
window.console.log(extractNumber('-1'));
window.console.log(extractNumber('1.5'));
window.console.log(extractNumber('NaN'));

/* 3. Задание - Функция, которая принимает три параметра: исходную строку, минимальную длину
и строку с добавочными символами — и возвращает исходную строку, дополненную указанными
символами до заданной длины. Символы добавляются в начало строки. Если исходная строка
превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная,
она обрезается с конца */
//Честно говорю взял из ретро, хотелось бы твоего комментария, разжевать так сказать

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length; //ищем разницу между мин длиной строки и заданной строкой

  if (actualPad <= 0) { //проверяем строку если она длиной меньше или = 0
    return string; //если да то прерываем выполнение и возвращаем строку в исходном состоянии
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

function getRandomInteger(min, max, decimals) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.random() * ((max - min + 1) + min).toFixed(decimals);

}
getRandomInteger(0, 150);
