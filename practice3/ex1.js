const person = {
    name: "Alice",
    showMessage: function (text = "Меня зовут", symbol = "!") {
        return `${text} ${this.name}${symbol}`;
    },
};

const stranger = {
    name: "Aptivace",
};

// 1. Метод call: сразу вызывает функцию, аргументы передаются через запятую
console.log(person.showMessage.call(stranger, "тест,", "."));

// 2. Метод apply: сразу вызывает функцию, аргументы передаются массивом
console.log(person.showMessage.apply(stranger, ["тест, ", "."]));

// 3. Метод bind: создает новую функцию с жестко привязанным контекстом
const boundShowMessage = person.showMessage.bind(stranger);
console.log(boundShowMessage("тест,", "."));
