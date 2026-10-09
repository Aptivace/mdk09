// Задание 10

// Ваш код здесь..
function displayUserInfo({ name, age, city = 'Unknown' }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

const user1 = { name: 'Bob', age: 25, city: 'Paris' };
const user2 = { name: 'Charlie', age: 35 };
displayUserInfo(user1); // "Name: Bob, Age: 25, City: Paris"
displayUserInfo(user2); // "Name: Charlie, Age: 35, City: Unknown"