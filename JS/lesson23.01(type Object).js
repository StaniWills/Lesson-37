// Тип данных Объект

// let obj = new Object({name: 'Tigran', age: 30})

// let array = [5,6,7,8]

// let obj = {
//     name: 'Tigran',
//     age: 50,
//     isJob: false,
//     test1: array.map(elem => elem ** 2),
//     test2: {
//         string: 'somestring'
//     },
//     test3: () => console.log(123),
//     test4: function(){
//         console.log(123)
//     }
// }

// console.log(obj)

// -------------------------
// let obj = {
//     first_name: 'Tigran',
//     age: 30
// }

// console.log(obj['first_name'] + 2000)


// ----------------------------
// Взаимодейсвтие с объектом

// let obj = {
//     name: 'Alex',
//     age: 30,
// }

// Добавление нового сво-во / перезаписать существующее сво-во

// obj.salary = 10000       добавление нового сво-ва
// obj.name = 'Tigran'      измененеи уже сущетвующего сво-ва

// Удаление сво-ва (оператор delete)

// delete obj.age           удаление сво-ва объекта 

// ----------
// Особенности delete у массива
// let array = [1,2,3,4]
// delete array[1]
// console.log(array.length)
// [ 1, <1 empty item>, 3, 4 ]
// Удаляет значение, оставляя индекс


// ---------------------
// Циклы по объектам

// let obj = {
//     name: 'Alex',
//     age: 30,
//     salary: 4000
// }

// for (let key in obj){        
//     console.log(key, obj[key]) 
// }

// name Alex
// age 30
// salary 4000

// key         - значение ключей
// obj[key]    - значение сво-ств

// -----------------------------------
// Задача 1 
// Используя цикл, выведите все значения объекта с числовым набором данных.

// Пример:
// let obj = {
//     char1 : 1,
//     char2 : 'string',
//     char3 : 3,
//     char4 : true,
//     char5 : 'false',
//     char6 : 1,
// }

// Результат:
// 1
// 3
// 1

// Решение

// for (let key in obj){
//     if (typeof(obj[key]) == 'number'){
//         console.log(obj[key])
//     }
// }

// --------------

// Задача 2.
// Используя цикл, выведите значения сво-св, у которых 
// значение ключа завершатся на четное число. 

// Пример:
// let obj = {
//     char1 : 1,
//     char2 : 'string',
//     char3 : 3,
//     char4 : true,
//     char5 : 'false',
//     char6 : 1
// }

// Результат:
// string
// true
// 1

// Решение
// for (let key in obj){
//     if (key[key.length -1] % 2 === 0){
//         console.log(obj[key])
//     }
// }

// --------------------------------
// методы класса Object

let obj = {
    name: 'Alex',
    age: 30,
    salary: 2000
}

// Преобразование объекта в массив
// Object.values(obj) - метод класса Object, который возвращает массив с значениями сво-ств объекта
// [ 'Alex', 30, 2000 ]

// Object.keys(obj) - метод класса Object, который возвращает массив с ключами объекта
// [ 'name', 'age', 'salary' ]

// Object.entries(obj) - метод класса Object, который возвращает массив с ключами и значениями объекта (вложенный массив)
// [ 
//     [ 'name', 'Alex' ], 
//     [ 'age', 30 ], 
//     [ 'salary', 2000 ] 
// ]


// ------------------------------
// Object.assign() - метод, позволяющий из 2 и более объектов сделать 1 объект

let user = {
    name: 'Alex',
    age: 30
}

let job = {
    job_id: 'IT',
    salary: 5000
}

console.log(Object.assign(user, job))
// { name: 'Alex', age: 30, job_id: 'IT', salary: 5000 }

// Метод не создает новый объект, а меняет первый аргумент

console.log(user)
// { name: 'Alex', age: 30, job_id: 'IT', salary: 5000 }

console.log(job)
// { job_id: 'IT', salary: 5000 }

