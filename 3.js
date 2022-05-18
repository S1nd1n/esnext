class Card {
    from;
    to;
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    getInfo() { }
}

const c1 = new Card('Пекин', 'Москва');
console.log(c1);
for (let prop in c1) {
    console.log(prop);
}

let fn = function () { }
fn();

let Course = class {
    title;
    getTitle() { return this.title }
}

let c2 = new Course();
c2.title = 'MongoDB';
console.log(c2);

class Math2 {
    static issOdd(n) {
        return !!(n % 2);
    }
}

console.log(Math2.issOdd(35));
console.log(Math2.issOdd(32));

class EducationalProduct {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    props() {
        for (let i in this) {
            console.log(`${i} = ${this[i]}`)
        }
    }
}

class Webinar extends EducationalProduct {
    constructor(title, price, qty) {
        super(title, price);
        this.quantity = qty;
    }
}
class Practice extends EducationalProduct {
    constructor(title, price, qty) {
        super(title, price);
        this.quantity = qty;
    }
}

let w1 = new Webinar('Как собират Parsel.js', 1, 100);
let w2 = new Webinar('Как тестироваться с Jest.js', 1, 200);
let p1 = new Practice('MongoDB', 8, 20);
w1.props();
w2.props();
p1.props();

console.log(w1.constructor, w2.constructor, p1.constructor);
console.log(w1 instanceof EducationalProduct);
console.log(w1 instanceof Webinar);
console.log(w1 instanceof Practice);