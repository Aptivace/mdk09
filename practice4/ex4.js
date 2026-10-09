const promise1 = new Promise(resolve => setTimeout(() => resolve('A'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('B'), 3000));
const promise3 = new Promise(resolve => setTimeout(() => resolve('C'), 2000));

Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results)); // Выведет ['A', 'B', 'C'] через 3 секунды