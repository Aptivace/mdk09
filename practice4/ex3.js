function randomPromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;

        if (isSuccess) {
            resolve("Успех!");
        } else {
            reject("Ошибка!");
        }
    });
}

// Обработайте оба случая
randomPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));