function countFrequency(arr) {
    const map = new Map();

    for (const item of arr) {
        const currentCount = map.get(item) || 0;
        map.set(item, currentCount + 1);
    }

    return map;
}

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(countFrequency(fruits));
// Map(3) { 'apple' => 3, 'banana' => 2, 'orange' => 1 }