// Задание 6

const settings = {
    theme: 'dark',
    language: 'ru'
    // notifications не указано
};
// Ваш код здесь..
const { theme = 'light', notifications = true, language = 'en' } = settings;

console.log(theme); // 'dark' (взято из объекта)
console.log(notifications); // true (значение по умолчанию)
console.log(language); // 'ru' (взято из объекта)