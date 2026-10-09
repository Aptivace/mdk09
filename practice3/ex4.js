let timeLeft = 10;
let timerId = null;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

startBtn.addEventListener("click", () => {
    // Не запускаем новый таймер, если текущий уже работает
    if (timerId !== null) return;

    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
        } else {
            clearInterval(timerId);
            timerId = null;
        }
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null; // Сбрасываем ID, чтобы кнопка "Старт" снова была активной
});