// Задание 3

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// Ваш код здесь..
const [firstFruit, secondFruit, ...otherFruits] = fruits;

console.log(firstFruit); // 'apple'
console.log(secondFruit); // 'banana'
console.log(otherFruits); // ['cherry', 'date', 'elderberry']