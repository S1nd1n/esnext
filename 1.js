let firstExample;
firstExample = 'Hello, world!';
// alert(firstExample);
console.log(firstExample);

console.log(2 ** 10);

function fn(a, ...params) {
    return params
}
console.log(fn(1, 2, ...[3, 4]));

let cat = { name: 'Bars' };
console.log(cat?.head?.eye);

console.log(cat.name ?? 'cat');
console.log(cat.color ?? 'gray');
console.log('yes' ?? 'no');

let salary = 100_000;

let a2 = [3, 4];
console.log(a2.includes(4));
console.log(a2.indexOf(4) != -1);
console.log(a2.findIndex(item => {
    return item == 4
}));

let a3 = [1, 2, [3, [4, 5]]];
console.log(a3.flat(2));

let s = 'Ехал Грека через реку';
console.log(s.replace(/р/g, 'л'));
console.log(s.replaceAll('р', 'л'));

console.log(s.matchAll(/ре/g));

// let a4 = [3, 4, 5];
// let n1 = a4[0], n2 = a4[1];
// let [n1, n2]= a4;
// let [, ...n2] = a4;
// console.log(n2);

let a5 = [3, 4, [7, 8]];
let [n1, n2, [n3 = 5]] = a5;
console.log(n3);

let user = {
    "firstName": "John",
    "height": 180,
    "head": {
        "colorHair": "color"
    }
}

let { firstName, height, } = user;
let { firstName: f, height: h } = user;
let { head: { colorHair: c } } = user;
console.log(firstName, height);
console.log(f, h, c);