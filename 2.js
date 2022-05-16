function fn(a = 0, b = 1) {
    return [a, b, arguments];
}
console.log(fn());
console.log(fn(10));
console.log(fn(undefined, 20));
console.log(fn(...(new Array(49)), 5));

let nums = [34, 56, 12];
console.log(Math.min(34, 56, 12));
console.log(Math.max(34, 56, 12));
console.log(Math.min(...nums));
console.log(Math.max(...nums));
console.log(Math.max.apply(null, nums));

function fn2({ firstName }) {
    return `Hi, ${firstName}!`
};
let user2 = { firstName: 'Anna', height: 180 };
console.log(fn2(user2));

const avg = (...p) => {
    let sum = 0;
    for (let i = 0; i < p.length; i++) {
        sum += p[i];
    }
    return sum / p.length;
}
console.log(avg(10, 20, 30));

const sum = (a, b) => a + b;
console.log(sum(10, 20));

// const add5 = n => n + 5;
const add5 = (n) => (
    n + 5
);

// const getObj = () => {return {}};
const getObj = () => ({});
console.log(getObj());

function fn4(n) {
    const fn = m => {
        console.log(this, arguments);
    }
    fn(200);
}
console.log(fn4(100));

console.log(`Hello, ${2 + 4}`);

function pre(str) {
    return `<pre>${str}</pre>`
}
console.log(pre`Hello, world!`);

function fn6(...params) {
    return params
}
console.log(fn6`Hello, ${2 + 4}`);

function lighting(strings, ...parts) {
    let result = '';

    for (let i = 0; i < parts.length; i++) {
        result += `${strings[i]} <b>${parts[i]}</b>`;
    }
    result += strings[parts.length];

    return result;
}
let user = { name: 'John', salary: 100_000 };
const text = lighting`Hello, ${user.name}!
You salary is ${user.salary}.`;
console.log(text);

let duration = 45;
let title = 'JS';
let propPrice = 'price';

let course = {
    title,
    duration,
    [propPrice]: 10_000,
    [propPrice + 'WithTax']: 10_000 * 1.1,
};
console.log(course);

let course2 = Object.assign({}, course, { title: 'MongoDB' }, { price: 20_000 });
console.log(course2);

let obj3 = {
    cost: 1_000,
    info() {
        return 'инфо'
    },
    set price(value) { this.cost = value; },
    get priceWithTax() { return this.cost * 1.1 }
}

console.log(obj3.info());

console.log(obj3.priceWithTax);
obj3.price = 2_000;
console.log(obj3.priceWithTax);

/*Есть два цвета '#336699' и '#ff0000'. Найти десять промежуточных цветов. Подсказка: parseInt('ff',16) -> 255 */
let color1 = '#336699';
let color2 = '#ff0000';
let steps = 10;

const gradient = (color1, color2, steps = 10) => {
    const rgb = color => {
        let red = parseInt(color.slice(1, 3), 16);
        let green = parseInt(color.slice(3, 5), 16);
        let blue = parseInt(color.slice(5), 16);
        return { red, green, blue };
    };

    const calcColor = (color, i) => (
        Math.floor(color1[color] + i * (color2[color] - color1[color]) / steps)
    );

    const colors = [];
    color1 = rgb(color1);
    color2 = rgb(color2);

    for (let i = 0; i < steps; i++) {
        let red = calcColor('red', i);
        let green = calcColor('green', i);
        let blue = calcColor('blue', i);
        colors.push(
            `rgb(${red}, ${green}, ${blue})`
        )
    }
    return [...colors, color2]
}

console.log(gradient(color1, color2));