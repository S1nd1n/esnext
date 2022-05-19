let colors = ['red', 'green'];
let user = {
    name: 'John',
    height: 180,
    [Symbol.iterator]: function () {
        let props = [];
        let index = 0;
        for (let i in this) {
            props.push({
                param: i,
                value: this[i],
            })
        }
        console.log(props);

        return {
            next() {
                if (index < props.length) {
                    return { value: props[index++], done: false }
                } else {
                    return { done: true };
                }
            }
        }
    }
}

for (let color of colors) {
    console.log(color);
}
for (let prop of user) {
    console.log(prop);
}

/* Есть объект const range = {from: 2, to: 100, delta: 3}. Сделать объект итерируемым: при прохождении по нему циклом for of, должны показываться числа с шагом 3. Например: 2, 5, 8, 11....*/

const range = {
    from: 2,
    to: 100,
    delta: 3,
};

range[Symbol.iterator] = function () {
    const { from, to, delta } = this;
    let i;
    return {
        next() {
            if (typeof i == 'undefined') {
                i = from;
            } else {
                i += delta;
            }
            return i < to ? { value: i, done: false } : { done: true };
        }
    }
}

// for (let prop of range) {
//     console.log(prop);
// }

let rangeIterator = range[Symbol.iterator]();
console.log(rangeIterator);

let tmp = rangeIterator.next();
console.log(tmp);

/* *Есть объект const fibonaciSequence = {from: 1, qty: 20}. Сделать объект итерируемым: при прохождении по нему циклом for of, должны показываться числа с шагом 3. Например: 1, 1, 2, 5, 8, 13.... в количестве 20 штук*/

// const fibonaciSequence = {
//     from: 1,
//     qty: 20
// }

// fibonaciSequence[Symbol.iterator] = function () {
//     {
//         const { from, qty } = this;
//         let i;
//         return {
//             next() {
//                 return i < to ? { value: i, done: false } : { done: true };
//             }
//         }
//     }
// }

// for (let prop of fibonaciSequence) {
//     console.log(prop);
// }


let days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

function* makeIterator(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}

const dayIterator = makeIterator(days);

// for (let i = 0; i < 7; i++) { console.log(dayIterator.next()); }
for (let i of dayIterator) { console.log(i); }