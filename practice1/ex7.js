// Задание 7

const company = {
    name: 'TechCorp',
    CEO: {
        name: 'John Smith',
        age: 45
    },
    locations: {
        headquarters: {
            city: 'San Francisco',
            country: 'USA'
        },
        offices: ['New York', 'London', 'Tokyo']
    }
};
// Ваш код здесь..
const {
    name: companyName,
    CEO: { name: ceoName },
    locations: { headquarters: { city: hqCity } }
} = company;

console.log(companyName); // 'TechCorp'
console.log(ceoName); // 'John Smith'
console.log(hqCity); // 'San Francisco'