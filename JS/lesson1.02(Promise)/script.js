// Введение в асинхронный код

// Асинхронный код - это код, на выполнения которого требяется n-ое количество времени

// Функция setTimeout() - позволяет сформировать задержку перед исполнением функции колбека

// --------------
// setTimeout(() => {
//       console.log('1 лог')
// },1000 )

// console.log('2 лог')

// console.log('3 лог')

// 2 лог
// 3 лог
// 1 лог

// ------------

// Пример 2 
// Логи в консоль происходят в произвольном порядке

// setTimeout(() => {
//       console.log('1 блок кода')
// }, Math.random() * 30)

// setTimeout(() => {
//       console.log('2 блок кода')
// }, Math.random() * 30)


// Решение этой проблемы (вложенность)

// setTimeout(() => {
//       console.log('1 блок кода')
//       setTimeout(() => {
//             console.log('2 блок кода')
//       }, Math.random() * 30)
// }, Math.random() * 30)


// Пример 3

// console.log('send request...')

// setTimeout(() => {

//       let data = [1,2,3]
//       console.log('data...', data)

//       setTimeout(() => {
//            handle(data) 
//            console.log('handle data...', data)
//       }, Math.random() * 30)

// }, Math.random() * 30)


// function handle(data){
//       data.push(4)
// }
// ------------------

// Promise - объект, который позволяет удобно работать с асинхронным кодом

// let promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//             let data = [1,2,3]
//             console.log(data)
//             resolve(data)
//       }, 2000)
// })

// Метод then дожидается пока promise получит функцию resolve и потом далее исполнит свой колбэк
// То, что мы получаем в методе then - это содержимое параметра функции resolve()

// promise
//       .then((data) => {
//             data.push(4)
//             console.log(data)
//             return data
//       })
//       .then((data) => {
//             return new Promise((resolve, reject) => {
//                   setTimeout(() => {
//                         data.shift()
//                         console.log( data, 'Последний')
//                         resolve(data)
//                   }, 10)
//             })
//       })
//       .then(data => {
//             data[0] = 'Alex'
//             console.log(data)
//       })


// Чтобы выполнить цепочку действий методов then - они должны возвращать данные через ключевое слово return

// -------

// let promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//             let data = [1,2,3]
//             console.log(data)
//             // resolve(data)
//             reject('Failed to fetch')
//       }, 2000)
// })

// Метод catch дожидается пока promise получит функцию reject и потом далее исполнит свой колбэк
// То, что мы получаем в методе catch - это содержимое параметра функции reject()

// finally - это метод, который исполнит свой код в любом случае (resolve или reject)

// promise
//       .then(data => console.log(data, 'then'))
//       .catch(er => console.error(er))
//       .finally(() => console.log('finally'))

// ------------------------------
// Fetch

// let url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
//       .then(res => res.json())
//       .then(data => console.log(data))

// --------------------------
// async, await

// 1) Синтаксический сахар, который позволяет избежать метод then 
// 2) Применяется строго к функциям. Перед функцией должен указываться оператор async
// 3) Чтобы сохранить результат работы промиса, перед присвоением к переменной необходимо указать оператор await
// 4) Код внутри функции будет линейно дожидаться выоплнения каждого await
// 5) Избегает метод then, но не catch (см конструкцию try... catch)

// async function fetchUsers(){
//       let url = 'https://jsonplaceholder.typicode.com/users'
//       let res = await fetch(url)
//       let data = await res.json()
//       console.log(data)
// }

// ----------------
// Обработчик ошибок try ... catch

// Назначение: обработка возможных ошибок

// 1) В блоке TRY помещается проблемный фрагмент кода (который может вызвать ошибку)
// 2) CATCH указывает на код, который будет исполнен в случае если TRY зафиксирует ошибку

// try {
// //    Ошибка. Переменной b не существует
//       let a = 10 - b
// } catch {
// //    Вместо ошибки мы получим в консоль данное сообщение
//       console.log('Обработали ошибку!')
// }

// // После обработки скрипт далее исполнит весь код
// console.log('Лог 2')

// -----------
// Обработка ошибок на стороне запроса (как внутри домена, так и внутри доступа к route)

// async function fetchUsers(){
//       try {
//             let url = 'https://jsonplaceholder.typicode.com/user345s'
//             let res = await fetch(url)
//             if (res.status >= 400){
//                   console.log('ID пользователя не существует или ссылка не верная')
//             } else {
//                   let data = await res.json()
//                   console.log(data, res)
//             }
//       } catch {
//             console.log('Сервер не найден')
//       }
// }
// fetchUsers()

// ----------------------
// Обработка на стороне метода promise (результат работы fetch)
// let url = 'https://jsonplaceholder.typicode.com/userwers'
// fetch(url)
//       .then(res => (res.status >= 400) ? 'ID пользователя не существует или ссылка не верная' : res.json())
//       .then(data => console.log(data))
//       .catch(() => console.log('Сервер не найден'))

// ----------------------------
// GET, POST запросы

// ------------
// GET
// const getAllPosts = () => {
//       let url = 'http://51.250.8.198:8000/api/get_all/'
//       fetch(url)
//             .then(res => res.json())
//             .then(data => console.log(data))
// }

// -------------
// POST (POST, DELETE, PUT)

// const createPost = (title, text) => {
//       let url = 'http://51.250.8.198:8000/api/create/'
//       let data = {
//             title,
//             text
//       }
//       fetch(url, {
//             method: 'POST',
//             headers: {
//                   'Content-Type': 'application/json;charset=utf-8' 
//             },
//             body: JSON.stringify(data)
//       })
// }


// -------------------------------
// DELETE

// const deleteById = (id) => {
//       let url = `http://51.250.8.198:8000/api/drop/${id}`
//       fetch(url, {
//             method: 'DELETE',
//             headers: {
//                   'Content-Type': 'application/json;charset=utf-8'
//             }
//       })
// }

// deleteById(12)

// createPost('сегодня прекрасный день', 'текст проекрасного дня')

// getAllPosts()