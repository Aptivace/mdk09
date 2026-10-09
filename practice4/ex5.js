function withTimeout(promise, ms) {
    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Таймаут'));
        }, ms);
    });

    // Возвращаем результат того промиса, который выполнится быстрее
    return Promise.race([promise, timeoutPromise]);
}

// Использование:
const slowPromise = delay(5000);
withTimeout(slowPromise, 2000)
    .then(() => console.log('Успех'))
    .catch((err) => console.log(err.message)); // Выведет "Таймаут"