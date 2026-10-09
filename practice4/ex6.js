const slow = new Promise(resolve => setTimeout(() => resolve('Я долгий'), 3000));
const fast = new Promise(resolve => setTimeout(() => resolve('Я быстрый'), 1000));

Promise.race([slow, fast])
    .then(result => console.log(result)); // Выведет "Я быстрый" через 1 секунду