const data = ['start', { id: 1 }, { value: 42, type: 'number' }, 'middle', 'end'];
// Ваш код здесь..
const [first, , { value: thirdValue }, ...rest] = data;

console.log(first); // 'start'
console.log(thirdValue); // 42
console.log(rest); // ['middle', 'end']