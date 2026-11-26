import { getRandomNumberInRange, getRandomElement } from './util.js';

// База данных
const NAMES = [
  'Ирина',
  'Татьяна',
  'Светлана',
  'Елена',
  'Дарья',
  'Алина',
  'Ксения',
  'Полина',
  'София',
  'Вера',
  'Алексей',
  'Иван',
  'Михаил',
  'Никита',
  'Павел',
  'Роман',
  'Владимир',
  'Егор',
  'Артём',
  'Кирилл'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Красивый закат на берегу моря.',
  'Встреча с друзьями в выходной день.',
  'Утренний кофе и свежая выпечка.',
  'Прогулка по осеннему парку.',
  'Любимый питомец отдыхает.',
  'Поездка в горы и захватывающий вид.',
  'Семейный ужин за большим столом.',
  'Цветущая поляна ранней весной.',
  'Городские огни ночью с крыши.',
  'Пикник в лесу на солнечной поляне.',
  'Зимняя прогулка по заснеженной улице.',
  'Первый снег за окном.',
  'Весёлая фотосессия с друзьями.',
  'Тёплый плед и интересная книга.',
  'Путешествие на поезде за окном.',
  'Купание в горном озере.',
  'Утренняя пробежка в парке.',
  'Дождь за окном и чашка чая.',
  'Сбор урожая на даче.',
  'Прогулка на велосипедах по набережной.',
  'Завтрак на балконе с видом на город.',
  'Игра с собакой на лужайке.',
  'Ночное небо со звёздами.',
  'Уютный вечер у камина.',
  'Дети пускают мыльные пузыри.',
];

//Константы по ТЗ
const OBJECT_QNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

//Генераторы id
const idGenerator = () => {
  let id = 0;
  return () => ++id;
};

const getCommentId = idGenerator();
const getPhotoId = idGenerator();

// Создание сущностей
const createMessage = (messageList) => {
  const count = getRandomNumberInRange(1, 2);
  const message = getRandomElement(messageList);
  if (count === 1) {
    return message;
  }
  let secondMessage = getRandomElement(messageList);
  while (secondMessage === message) {
    secondMessage = getRandomElement(messageList);
  }
  return `${message} ${secondMessage}`;
};

const createComment = () => {
  const id = getCommentId();
  const avatar = `img/avatar-${getRandomNumberInRange(MIN_AVATAR, MAX_AVATAR)}.svg`;
  const message = createMessage(MESSAGES);
  const name = getRandomElement(NAMES);
  return {
    id,
    avatar,
    message,
    name
  };
};

const createComments = () => Array.from({ length: getRandomNumberInRange(MIN_COMMENTS, MAX_COMMENTS) }, createComment);

const createPhoto = () => {
  const id = getPhotoId();
  const url = `photos/${id}.jpg`;
  const description = getRandomElement(DESCRIPTIONS);
  const likes = getRandomNumberInRange(MIN_LIKES, MAX_LIKES);
  const comments = createComments();
  return {
    id,
    url,
    description,
    likes,
    comments
  };
};

const createPhotos = (count) => Array.from({ length: count }, createPhoto);

export { createPhotos, OBJECT_QNT };
