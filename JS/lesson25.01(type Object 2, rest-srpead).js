// --------------------------
// Копирование объектов

// let obj1 = {name: 'Tigran', age: 30}

// 1)
// let obj2 = Object.assign({}, obj1)
// 2)
// let obj2 = {...obj1}

// console.log(obj1 == obj2)
// console.log(obj1,obj2)

//          false
//          { name: 'Tigran', age: 30 } { name: 'Tigran', age: 30 }


// ----------------------
// Сравнение объектов
// JSON - JavaScript Object Notation

// let obj1 = {name:'Tigran',age: 30}
// let obj2 = {name:'Tigran',age: 30}

// JSON.stringify(obj)   - метод, преобразующий объект в JSON (возвращает строку)
// JSON.parse(string)    - метод, преобразующий JSON в JS объект (возвращает объект)

// let json = JSON.stringify(obj1)
//              '{"name":"Tigran","age":30}'

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
//              true


// ----------------------
// Копирование объектов (часть 2)

// let obj1 = {name:'Tigran',age: 30}

// Неглубокое копирование
// let obj1Copy = Object.assign({}, obj1)

// Глубокое копирование
// let obj1Copy = JSON.parse(JSON.stringify(obj1))

// console.log(obj1Copy == obj1)

// -----------------------
// Задача 1
// Заданы три объекта: 
// let user_11 = {id: 1}
// let user_12 = {username: 'user'}
// let user_2 = {
//     id: 1,
//     username: 'user'
// }
// Задача: объедините user_11 и user_12 в один объект 
// и сравните результат с объектом user_2. 
// В качестве ответа необходимо получить булевый тип

// Решение: 
// let user_1 = Object.assign({}, user_11, user_12)
// console.log(JSON.stringify(user_1) == JSON.stringify(user_2))


// ----------------
// Задача 2: 
// Напишите функцию checkObj(obj), которая проверяет, действительно 
// ли объект obj пустой {}. Функция должна вернуть булевый тип
// Подсказка: можно попробовать преобразовать объект в массив

// Решение 1 
// function checkObj(obj){
//     let objToArray = Object.keys(obj)
//     let length = objToArray.length

//     if (length == 0){
//         return true
//     } else {
//         return false
//     }
// }

// Решение 2 
// function checkObj(obj){
//     return Object.keys(obj).length == 0
// }

// Решение 3
// function checkObj(obj){
//     return JSON.stringify(obj) == '{}'
// }


// console.log(checkObj({}))


// ------------
// Задача 3: 
// Напишите функцию checkObjectLength(obj1,obj2), которая принимает в 
// аргументе 2 объекта. Если у 1 и 2 объекта количество свойств
// одинаковое - функция должна вернуть ответ true

// Пример: 
// checkObjectLength({test: 10}, {great: 12})
// Результат: true

// Решение

// function checkObjectLength(obj1, obj2){
//     return Object.keys(obj1).length == Object.keys(obj2).length
// }

// console.log(checkObjectLength({test: 'test', name: 'string'}, {age: 40}))
//              true
// console.log(checkObjectLength({test: 'test'}, {age: 40}))
//              false


// -------------------------
// Проверить, действтительно ли массив является массивом, а не объектом
// let array = [1,2,3]
// let obj = {name: 'Tigran'}

// // Метод isArray
// console.log(Array.isArray(array))
// //          true
// console.log(Array.isArray(obj))
// //          false


// let array = [
//     {id : 1, name: 'Tigran'},
//     [2, 'Alex'],
//     {id: 3, name: 'Neena'},
//     [3, 'Steven']
// ]

// Задание: сформируйте из массива array два новых массива usersArray и usersObjs,
// элементы которых будут содержать вложенный массив и объект соответственно

// function someHandle(array){
//     let usersArray = array.filter(elem => Array.isArray(elem))
//     let usersObjs = array.filter(elem => !Array.isArray(elem))
//     // Правильно
//     return {usersArray, usersObjs}
//     // Или (правильно)
//     // return [usersArray, usersObjs]

//     // Не правильно
//     // return usersArray, usersObjs
// }

// console.log(someHandle(array))

// --------------------------------
// Деструктуризация - это процесс создания новых перменных (больше 1) одной строкой

// (Для массива)
// let [b,a,c] = [10,40,30]
// Порядок переменных и чисел после знака равенство строго зависимы

// console.log(a,b,c) 
//           40 10 30

// (Для объекта)
// let obj = {a: 10, b: 20, c:30}

// Пример 1
// let {a,b,c} = obj
// console.log(a,b,c) 
//            10 20 30

// Пример 2
// let {d,c,f} = obj
// console.log(d,f,c) 
//            undefined undefined 30

// Важное условие деструктуризации объектов:
// имена новых переменных в деструктуризации должно полностью соотвествовать значниям ключей у объекта

// Пример 3
// let {c} = obj
// console.log(c)  
//          30

// -----------------
// let array = [10,40,30]

// Пример 1
// let [a,b,c,d,f,g] = array
// console.log(a,b,c,d,f,g)
//      10 40 30 undefined undefined undefined

// Пример 2
// let [a,b] = array
// console.log(a,b)
//      10 40


// -----------------------
// Распаковка массива

// let array = [5,6,7,8,9]

// console.log(...array)
// console.log(5,6,7,8,9)

// // ...array = 5,6,7,8,9

// console.log(array)
// console.log([5,6,7,8,9])

// -------
// Не глубокое копирование массива
// let arrayCopy = [...array] 

// ------
// Копирование и добавление нового элемента 
// let array = [5,6,7,8,9]

// Пример 1
// let arrayCopy = [...array, 10] 
// console.log(arrayCopy)
//          [ 5, 6, 7, 8, 9, 10 ]

// Пример 2
// let arrayCopy = [30,40, ...array, 10]
// console.log(arrayCopy) 
//          [30, 40, 5, 6, 7, 8, 9, 10]

// -------------------
// оператор Spread - используется для разделения массива/объекта на отдельные элементы
// оператор Rest - используется для соединения отдельных элементов в массив

// // Здесь ...array - это Rest-оператор

// function log(...array){
// //              здесь - Spread-оператор
//     console.log(...array)
// }

// log(1,2,3)
//      1 2 3

// log(1,2,3,4,5)
//      1 2 3 4 5

// // Пример 2
// function handle(n1,n2,...array){
//     console.log(n1, n2, array)
// }

// // Данная структура очень сильно похожа на реализацию метода splice()

// handle(1,2,3,4,5)
        // 1 2 [ 3, 4, 5 ]

// let array = ["Раз","Два","Три","Четыре"]
// array.splice(2,1,3,4,5,6)
// console.log(array)

