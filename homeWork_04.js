//Сортировка пузырьком(Bubble sort) - сравнивает каждый элемент с последующим и меняет их местами если нужно.

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1]; 
        console.log(arr[j+1]); // 
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
// Сложность O(n^2).

//Сортировка выбором(Selection sort) - находит наименьший элемент и ставит его в начало.

function selectionSort(arr) { 
  for (let i = 0; i < arr.length; i++) { 
    let minIdx = i; 
    
    for (let j = i + 1; j < arr.length; j++) { 
      if (arr[j] < arr[minIdx]) { 
        minIdx = j; 
      } 
    } 
    let tmp = arr[i]; 
    arr[i] = arr[minIdx]; 
    arr[minIdx] = tmp; 
  } 
  return arr; 
}

//Сортировка вставками(Insertion sort) - берет элемент и вставляет его на нужное место в отсортированной части массива.

//Быстрая сортировка(Quicksort) - выбирает опорный элемент и разделяет массив на две части по отношению к нему.

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];

  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

//Сортировка слиянием(Merge sort) - рекурсивно делит массив на части и сливает отсортированные части.

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}

//Пирамидальная сортировка(Heap sort) - использует двоичную кучу(heap) для сортировки.

//Сортировка Шелла(Shell sort) - улучшенная вставками, использует "шаги".

//Сортировка подсчетом(Counting sort) - подсчитывает количество элементов с одинаковыми ключами.

//Выбор алгоритма зависит от вида данных, размера массива и других требований к сортировке.

//..................................................................................

//функция коснтруктор
function Person(name, age) { 
  this.name = name; this.age = age; 
}

Person.prototype.logInfo = function () { 
  console.log(this.name + ', ' + this.age);
}

// классовый подход
class Person {
  constructor(name, age) { 
    this.name = name; this.age = age; 
  }

  logInfo() { 
    console.log(this.name + ', ' + this.age); 
  }
}


// с помощью Object.create
const PersonProto = { 
  logInfo() { 
    console.log(this.name + ', ' + this.age); 
  } 
};

const person = Object.create(PersonProto); 
person.name = 'John'; person.age = 30;

// Создаем обьект Person2

//функцию конструктор
function Person2(name, age) { 
  Person.call(this, name, age); 
}

// классовый подход
class Person2 extends Person { 
  constructor(name, age) { 
    super(name, age); 
  } 
}

// Через Object.create
const Person2 = Object.create(PersonProto);

// Добавление метода
Person.prototype.logInfo = function() { 
  console.log(this.name + ', ' + this.age);
}

//...................................................................................

//Создаем класс PersonThree

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class PersonThree extends Person {
  constructor(name, age) {
    super(name, age);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const person = new PersonThree('John', 30);

console.log(person.name); // вызовет геттер name
person.name = 'Alex'; // вызовет сеттер name

//...................................................................................
//функция суммы первых чисел

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;

const firstSum = (arr, total) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(firstSum(arr, total)); // [4, 9] Сложность O(n^2)

const firstSum2 = (arr, total) => {
  let diff = {};

  for (let i = 0; i < arr.length; i++) {
    if (diff[arr[i]]) {
      return [diff[arr[i]], arr[i]];
    }
    diff[total - arr[i]] = arr[i]; 
  }
}

// В этом решении сложность O(N)
