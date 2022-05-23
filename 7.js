const myMap = new Map();

let keyObj = {};
let keyFn = () => { };
let keyNum = 5;

myMap.set('key', 'value');
myMap.set(keyObj, 100_000);
myMap.set(keyFn, 'функция');
myMap.set(keyNum, true);

console.log(myMap);
console.log(myMap.size);
console.log(myMap.get('key'));
console.log(myMap.get(keyObj));

myMap.delete(keyObj);
console.log(myMap.has(keyObj));
console.log(myMap.has(keyNum));
// myMap.clear();

for (let [key, value] of myMap) {
    console.log(key, value);
}
console.log(myMap);
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());

const cities = [
    { id: 123443, name: 'Москва' },
    { id: 12434, name: 'Санкт-Петербург' },
    { id: 2345, name: 'Владивосток' },
    { id: 767, name: 'Нижний Новгород' },
    { id: 9845, name: 'Сочи' },
];

let myMap2 = new Map, myMap3 = new Map;
cities.forEach(city => {
    myMap2.set(city.id, city.name);
    myMap3.set(city, city.name);
});
console.log(myMap2.get(2345));
const myMap3Iterator = myMap3.keys();
for (let item of myMap3Iterator) {
    console.log(item.name)
}
console.log(myMap3.get(cities[2]));

let mySet = new Set();

mySet.add(18);
mySet.add(18);
mySet.add(20);
mySet.add(20);
mySet.add(30);
mySet.add(100);

console.log(mySet);
console.log(mySet.has(18));
console.log(mySet.size);
console.log(mySet.delete(100));
console.log(mySet);

const obj1 = { prop1: 'value' };

Object.defineProperties(obj1, {
    'prop2': {
        configurable: true,
        enumerable: true,
        writable: false,
        value: 5,
    }
})

obj1.prop1 = 'value2';
// obj1.prop2 = 7;
console.log(obj1);

const JSON_Obj = '{ "name": "John" }';
const JSON_Str = '"name"';
const JSON_Num = '5';

console.log(JSON.parse(JSON_Obj));
console.log(JSON.parse(JSON_Str));
console.log(JSON.parse(JSON_Num));