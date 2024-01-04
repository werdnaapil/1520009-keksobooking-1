import { getPlaces } from './data.js';

const viewCard = document.querySelector('.map');

const mapCanvasElement = viewCard.querySelector('.map__canvas');

const typeNames = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

//создаем переменную для хранения шаблона карточки ищем по содержимому template карточки
const similarCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarCard = getPlaces(); //создаем переменную для хранения массива из мест

const similarCardFragment = document.createDocumentFragment();


//проходим по массиву методом forEach и получаем разные элементы карточек
similarCard.slice(0,1).forEach(({ offer, author }) => {
  const {
    title, address, price, type, rooms, guests, checkin, checkout,
    features, description, photos
  } = offer;
  const { avatar } = author;
  const cardElement = similarCardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = title;
  cardElement.querySelector('.popup__text--address').textContent = address;
  cardElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = typeNames[type];

  cardElement.querySelector('.popup__text--capacity').textContent = `${rooms} + комнаты для
  + ${guests}  +  гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд до + ${checkin}  + выезд до +
  ${checkout}`;
  cardElement.querySelector('.popup__features').textContent = features;
  cardElement.querySelector('.popup__description').textContent = description;

  // получить элемент popup__photos
  const viewPhoto = cardElement.querySelector('.popup__photos');
  // получить элемент popup__photo, будем использовать его как шаблон
  const photosTemplate = viewPhoto.querySelector('.popup__photo');

  photos.forEach((PHOTOLINKS) => {
    // сделать копию элемента с popup__photo
    const clonePhotos = photosTemplate.cloneNode(true);
    // записать в копию адрес картинки из photoLink
    clonePhotos.src = PHOTOLINKS;
    // добавить копию в popup__photos
    viewPhoto.appendChild(clonePhotos);
  });
  //cardElement.querySelector('.popup__photo').src = viewCard; // ['img1.jpg', 'img2.jpg'] photos[0]
  cardElement.querySelector('.popup__avatar').src = avatar;
  similarCardFragment.appendChild(cardElement);

  mapCanvasElement.appendChild(similarCardFragment);

  if (title === undefined) {
    cardElement.querySelector('.popup__title').classList.add('hidden');
  }
  if (address === undefined) {
    cardElement.querySelector('.popup__text--address').classListAdd('hidden');
  }
  if (price === undefined) {
    cardElement.querySelector('.popup__text--price').classListAdd('hidden');
  }
  if (typeNames === undefined) {
    cardElement.querySelector('.popup__type').classListAdd('hidden');
  }
  if (rooms === undefined) {
    cardElement.querySelector('.popup__text--capacity').classListAdd('hidden');
  }
  if (checkin, checkout === undefined) {
    cardElement.querySelector('.popup__text--capacity').classListAdd('hidden');
  }
  if (features === undefined) {
    cardElement.querySelector('.popup__features').classListAdd('hidden');
  }
  if (description === undefined) {
    cardElement.querySelector('.popup__description').classListAdd('hidden');
  }

});

