//асинхронность через ыункцию обратного вызова
/* function fn1(a, b, callback) {
    let result = a + b;
    callback(result);
    return result;
}

function fn2(res) {
    alert(res);
}

fn1(5, 7, fn2); */

const p1 = new Promise((resolve, reject) => {
    // resolve('test');
    // reject('test');
    setTimeout(() => { resolve('test') }, 5_000);
});

/* p1.then(result => {
    console.log(result);
}).catch(error => {
    console.log(`Ошибка: ${error}`);
}); */
p1.then(
    result => console.log(result),
    error => console.log(`Ошибка: ${error}`),
);

console.log(new Date().toLocaleDateString());


/* Создать Promise, в котором генерируется случайное целое число. Если число нететное, сделать resolve('неетное'). В качестве аргумента then - передать функцию, выводящую результат в консоль. */

const p2 = new Promise((resolve, reject) => {
    const i = Math.round(Math.random() * 100);
    i % 2 ? resolve(`нечетное ${i}`) : reject(`четное ${i}`);
});

p2
    .then(result => console.log(result))
    .catch(result => console.log(`%cОшибка:${result}`, 'color: red; font-weight:bold'));


fetch('/9.json')
    .then(result => result.json())
    .then(body => console.log(body));

/* Существует тестовый сервис https://jsonplaceholder.typicode.com Маршрут /users содержит набор данных о некоторых пользователях. Вывести в консоль список имен.  */

const URL = 'https://jsonplaceholder.typicode.com/users'
fetch(URL)
    .then(result => result.json())
    .then(users => users.forEach(user => {
        console.log(user.name)
    }));

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('p3') }, 3_000);
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('p4') }, 5_000);
});
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('p5') }, 10_000);
});

const pAll = Promise.all([p3, p4, p5]);
pAll.then(values => {
    console.log(`Готово All!`, values)
})

const pRace = Promise.race([p3, p4, p5]);
pRace.then(values => {
    console.log(`Готово Race!`, values)
})

const p11 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(5) }, 2_000);
});
const p12 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(10) }, 8_000);
});
async function fn1() {
    let summa = 0;
    let a = await p11;
    let b = await p12;
    return a + b;
}

const p6 = fn1();
p6.then(result => console.log(result));

const getPostsByUser = async (name) => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(result => result.json());
    const userId = users.filter(user => user.name == name)[0]["id"];

    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => response.json())
    // .then((json) => console.log(json));
    return posts;
}

getPostsByUser("Leanne Graham")
    .then(posts => console.log(`Количество постов: ${posts.length}`))
    .catch(error => console.log(error));

// Пример асинхронного итератора
const asyncIterator = {
    [Symbol.asyncIterator]() {
        const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json());

        return {
            i: 0,
            async next() {
                const users = await usersPromise;
                if (this.i < users.length) {
                    return Promise.resolve({ value: users[this.i++], done: false })
                }
                return Promise.resolve({ done: true })
            }
        }
    }
};
(async function () {
    for await (let item of asyncIterator) {
        console.log(item);
    }
})();
