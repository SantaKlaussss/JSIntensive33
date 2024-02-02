let promiseTwo = new Promise((resolve, reject) => {
  resolve("a"); // a - выполнено
});

promiseTwo
  .then((res) => {
    return res + "b"; // b - выполнено
  })
  .then((res) => {
    return res + "с"; // с - выполнено
  })
  .finally((res) => {
    return res + "!!!!!!!"; // !!!!!!! - выполнено, но возвращает undefined
  })
  .catch((res) => {
    return res + "d"; // d - не выполнено
  })
  .then((res) => {
    console.log(res); //  abc ответ
  });


function doSmth() {
  return Promise.resolve("123");
}

doSmth()
  .then(function (a) {
    console.log("1", a); // 1 123
    return a;
  })
  .then(function (b) {
    console.log("2", b); // 2 123
    return Promise.reject("321");
  })
  .catch(function (err) {
    console.log("3", err); // 3 321, так как мы прокинули reject в catch
  })
  .then(function (c) {
    console.log("4", c); // 4 undefined, так как мы прокинули reject в catch
    return c;
  });

  // 1 123 2 123 3 321 4

//...................................................................................

function printArray(arr) {
  arr.forEach((num, index) => {
    setTimeout(() => {
      console.log(`Индекс ${index}: ${num}`); 
    }, 3000 * index); 
  });
}

let array = [10, 12, 15, 21];
printArray(array); 
// Каждый 3 секунды будет выводить индекс и значение элемента массива

//........................................................................
async function fetchUrl(url) {
  let attempt = 0;

  while(attempt < 5) {
    attempt++;
    try {
      const response = await fetch(url); 
      return response;
    } catch(err) {
      console.log(`Ошибка, попытка ${attempt}`);  
    }
  }

  throw new Error('Не удалось получить данные после 5 попыток');
}

fetchUrl('https://google.com')
  .then(response => {
   console.log(response); // получили данные 
  })
  .catch(err => {
    console.log(err); // выведет ошибку после 5 попыток
  });
