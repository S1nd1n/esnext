// Есть объект const fibonaciSequence = {from: 1, qty: 20}. Сделать объект итерируемым: при прохождении по нему циклом for of, должны показываться числа с шагом 3. Например: 1, 1, 2, 5, 8, 13.... в количестве 20 штук

function* fibonaciGenerator() {
    let n1 = 0, n2 = 1, n3;
    yield n1;
    yield n2;

    while (true) {
        yield n1 + n2;
        n3 = n1;
        n1 = n2;
        n2 = n1 + n3;

    }
}

const fibonaciIterator = fibonaciGenerator();
for (let i = 0; i < 20; i++) {
    let result = fibonaciIterator.next();
    console.log(result.value);
}