// Задание 8

const originalArray = [1, 2, 3];
const originalObject = { a: 1, b: 2 };
// Ваш код здесь..
const copiedArray = [...originalArray];
const extendedObject = { ...originalObject, newProp: 'newValue' };

console.log(copiedArray); // [1, 2, 3] (но другой массив)
console.log(extendedObject); // { a: 1, b: 2, newProp: 'newValue' }