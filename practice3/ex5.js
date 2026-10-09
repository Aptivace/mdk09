function makeBlink(element, interval = 500) {
    return setInterval(() => {
        element.style.opacity =
            element.style.opacity == 0 ? 1 : 0;
    }, interval);
}

// Пример использования:
const box = document.getElementById("kavo");
const timerId = makeBlink(box, 600); // Мигает каждые 600 мс
