function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Использование:
delay(3000).then(() => console.log('Выполнилось через 3 секунды'));