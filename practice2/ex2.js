function aclean(arr) {
    const map = new Map();

    for (let word of arr) {
        // Делаем ключ из отсортированных букв слова в нижнем регистре
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }

    // Возвращаем массив всех сохраненных значений
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr)); // ["PAN", "hectares", "era"] (или другие варианты из тех же групп)