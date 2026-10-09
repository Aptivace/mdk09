function repeatNTimes(fn, interval, n) {
    let count = 0;

    const timerId = setInterval(() => {
        fn();
        count++;

        if (count >= n) {
            clearInterval(timerId);
        }
    }, interval);
}

// Пример использования:
repeatNTimes(() => console.log("Сработало!"), 1000, 3);
// Выведет "Сработало!" 3 раза с интервалом в 1 секунду