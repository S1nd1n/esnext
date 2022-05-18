/* Игровой пример. Создаем четыре классы космических тел и оцениваем
получаемые от них ресурсы. Создайте класс Solid, хранящий координаты x и y,
resources - с начальным значением 0, square - площадь поверхности
космического объекта, геттер для ресурсов, и метод увеличения количества
ресурсов. На основе Solid, создайте классы:
a. Asteroid со своим методом добавления ресурса
b. Planet метод производства ресурсов должен отличаться от астероидного
c. Star */

import { rand } from "./5/rand.js";
import Star from "./5/star.js";
import Planet from "./5/planet.js";
import Asteroid from "./5/asteroid.js";

let stars = [];
for (let i = 0; i < 10; i++) {
    stars.push(new Star(rand(0, 100), rand(0, 100), rand(10, 20)));
}

let planets = [];
for (let i = 0; i < 500; i++) {
    planets.push(new Planet(rand(0, 100), rand(0, 100), rand(10, 20)));
}

let asteroids = [];
for (let i = 0; i < 1000; i++) {
    asteroids.push(new Asteroid(rand(0, 100), rand(0, 100), rand(1, 5)));
}

console.log(stars);
console.log(planets);
console.log(asteroids);

/*const universe1 = [...stars, ...planets, ...asteroids];

setInterval(() => {
    let summarResourse = 0;
    universe1.forEach(item => {
        summarResourse += item.addRes();
    })
    console.log(summarResourse);
}, 10000) */
