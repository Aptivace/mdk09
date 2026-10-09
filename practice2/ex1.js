function uniqueCount(arr) {
    return new Set(arr).size;
}

// Пример использования:
const numbers = [1, 2, 2, 3, 4, 4, 4, 5, 1];
console.log(uniqueCount(numbers)); // 5