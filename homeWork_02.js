//Создаем обьект --------------------------------------------------------------------------------------

const counter = {key: 'value'}

const counter2 = new Object();
counter2.key = 'value';

function Counter(key, value) {
  this.key = value;
}
const counter3 = new Counter('key', 'value');

const counter4 = Object.create({key: 'value'});

class ClassCounter {
  constructor(key, value) {
      this.key = value;
  }
}
const counter5 = new ClassCounter('key', 'value');

// Копируем объект ------------------------------------------------------------------------------------
const copiedCounter1 = { ...counter };

const copiedCounter2 = Object.assign({}, counter);

const copiedCounter3 = JSON.parse(JSON.stringify(counter));

const copiedCounter4 = {};
for (let key in counter) {
  copiedCounter4[key] = counter[key];
}

const copiedCounter5 = Object.create(Object.getPrototypeOf(counter), Object.getOwnPropertyDescriptors(counter));

function deepCopy(obj) {

  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

const copiedCounter6 = deepCopy(counter); // глубокое копирование обьекта

// Crate a function makeCounter ------------------------------------------------------------------------

const makeCounter = function() {}; //expression

function makeCounter3() {}
const makeCounter3 = new makeCounter3(); //функция коснтруктор

class makeCounter4 { 
  constructor() {}
}
const makeCounter4 = new makeCounter4();// классовый подход

const makeCounter5 = () => {}; //arrow function

const obj = {
  makeCounter6() {} //create as method object
};

const makeCounter7 = new Function('param1', 'param2', 'return param1 + param2;'); // динамическое создание функции


//Создаем функцию глубокого сравнения ------------------------------------------------------------------

const obj1 = {
  here: {
    is:
      "on", other: "3"
  }, object: "Y"
};

const obj2 = {
  here: {
    is:
      "on", other: "2"
  }, object: "Y"
};

function deepEqual(obj1, obj2) {
  // Проверяем, что оба аргумента являются объектами
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return obj1 === obj2;
  }

  // Получаем массив ключей для каждого объекта
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Проверяем, что количество ключей совпадает
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Проверяем, что каждый ключ и значение совпадают рекурсивно
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}


//Разворачиваем строку с помощьтю методов массива --------------------------------------------------------------

function reverseStr(str) {
  return str.split('').reverse().join('');
}
