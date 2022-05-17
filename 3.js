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

let fn =function(){}
fn();

let Course = class {
    title;
    getTitle(){return this.title}
}

let c2 = new Course();
c2.title = 'MongoDB';
console.log(c2);