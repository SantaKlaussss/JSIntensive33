
const res = "B" + "a" + (1 - "hello");
console.log(res);
//BaNaN

const res2 = (true && 3) + "d";
console.log(res2);
//3d

const res3 = Boolean(true && 3) + "d";
console.log(res3);
// trued

//....................................................................................................................................

const number = 5;
const number2 = new Number(5);

const string = 'js intensive 33';
const string2 = new String('js intensive 33');
const string3 = (33 + 'JSintensive'); // при конкатенации число преобразуется в строку

const isTrue = true;
const isFalse = false;
const isTrue2 = new Boolean(true);
const isFalse2 = new Boolean(false);
const isTrue3 = 2 > 1; // Используя логичекое равенство
const isFalse3 = 2 < 1; 

const nullValue = null;

const undefinedValue = undefined;
let undefinedValue2;
(function() {})();

// Т.е. получаем undefined при попытке получить доступ к:
//неинициализированной переменной number,
//несуществующему свойству объекта,
//несуществующему элементу массива,
//функции, которая ничего не возвращает.

let bigIntVar = 123456789012345678901234567890n;
let bigIntVar2 = BigInt('123456789012345678901234567890');
let bigIntVar3 = BigInt(10);

let symbl = Symbol(5);
/*
.......................................................................................................................................

Метод "OPTIONS" является одним из методов HTTP, который используется для запроса информации о возможностях и настройках сервера для указанного ресурса или для проверки поддержки методов запроса.

Запрос на получение информации о сервере: Когда клиент отправляет запрос методом "OPTIONS" для определенного ресурса, сервер должен вернуть информацию о поддерживаемых методах, заголовках, аутентификации и других возможностях для этого ресурса.

Кросс-доменные запросы (CORS): Метод "OPTIONS" часто используется при реализации механизма CORS (Cross-Origin Resource Sharing) веб-приложений. При выполнении кросс-доменных запросов браузер может отправлять предварительные запросы методом "OPTIONS" для проверки разрешения на выполнение основного запроса.

Проверка поддержки методов запроса: Метод "OPTIONS" также может использоваться для проверки поддержки определенных методов запроса (например, GET, POST, PUT, DELETE) для конкретного ресурса.

.......................................................................................................................................

HTTP 3.0 это новая версия HTTP, использующий протокол передачи данных 
QUIC.

Протокол QUIC (Quick UDP Internet Connections) - это современный протокол передачи данных, который был разработан Google для улучшения производительности и безопасности передачи данных в Интернете. Вот более подробное описание его особенностей:

Преимущества HTTP 3.0:

  Мультиплексирование: QUIC поддерживает мультиплексирование, что позволяет объединять несколько потоков данных в одно соединение.Это уменьшает задержки и улучшает производительность, поскольку не требуется установление отдельного соединения для каждого потока данных.

  Быстрое установление соединения: QUIC сокращает время установления соединения за счет совмещения процессов установления соединения и шифрования.Это позволяет уменьшить задержки при начале передачи данных.

  Переключение путей: Протокол QUIC позволяет быстро переключаться между сетевыми путями, что повышает надежность передачи данных за счет возможности обхода проблем на конкретном пути.

  Шифрование по умолчанию: QUIC включает шифрование по умолчанию, что обеспечивает безопасную передачу данных даже в условиях не надежных сетей.

  Быстрое восстановление соединения: Протокол QUIC быстро восстанавливает соединение после потери пакетов, что повышает надежность передачи данных.

QUIC был разработан с учетом современных требований к сетевым протоколам, таким как улучшение производительности, безопасности и надежности передачи данных в разнообразных сетевых условиях.

.......................................................................................................................................

Способы отмены запросов:
  у библиотеки axios это команда CancelToken.

  у fetch API это объект AbortController.
    const controller = new AbortController();
    const signal = controller.signal;
    
    fetch(url, { signal: signal })
      .then(response => {
        // обработка ответа
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          // обработка отмены запроса
        } else {
          // обработка других ошибок
        }
      });
      
    отмена запроса:
    controller.abort();

  .....................................................................................................................................

  Так как в отличик от var - let и const не выспылвают в начало кода
*/
