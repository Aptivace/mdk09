// Задание 9

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// Ваш код здесь..
const mergedArray = [...array1, ...array2];
const mergedObject = { ...obj1, ...obj2 };

console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
console.log(mergedObject); // { a: 1, b: 2, c: 3, d: 4 }