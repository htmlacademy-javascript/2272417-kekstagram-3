//Вспомогательные функции
const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomElement = (elements) => elements[getRandomNumberInRange(0, elements.length - 1)];

export { getRandomNumberInRange, getRandomElement };
