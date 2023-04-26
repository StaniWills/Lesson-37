// localStorage

// console.log(localStorage)

// ---------
// Инициализация записи в localStorage
// localStorage.setItem('user', 'Hello world!')
// localStorage.setItem('user1', 'Hello world!')
// localStorage.setItem('user2', 'Hello world!')

// ---------
// Удаление одной записи по ключу 
// localStorage.removeItem('user')

// Удаление всех записей в localStorage
// localStorage.clear()

// ---------
// Получание данных с localStorage
// let row = localStorage.getItem('user')

// console.log(row)


// ------------------------------

// let obj = {
//     name: 'Alex',
//     age: 25,
//     salary: 1500
// }

// localStorage.setItem('form', JSON.stringify(obj))


// -------------
// Задача. Опишите две функции: writeLocalStorage(row) и readLocalStorage(). 
// Функции должны записывать или считывать объекты в localStorage соответственно.


// function writeLocalStorage(obj){
//     localStorage.setItem('user', JSON.stringify(obj))
// }

// writeLocalStorage(['Alex', 1000, 29])

// function readLocalStorage(){
//     return JSON.parse(localStorage.getItem('user'))
// }

// console.log(readLocalStorage())

// ------------------------------
// Практика

// 1. Создать форму, которая добавляет запись в массив и отрисовывает элемент на разметке
// 2. Связать процесс с localStorage таким образом, чтобы после обновления страницы данные никуда не пропадали
// 3. Создайте кнопку, которая будет хранить тектсовое сво-во "Удалить всех пользователей" и очищать localStorage

let form = document.querySelector('#form_elem')
let div_root = document.querySelector('#root')
let div_container = document.createElement('div')
div_container.className = 'users_container'
div_root.append(div_container)

let reset_btn = document.createElement('button')
reset_btn.innerText = 'Удалить всех пользователей'
div_container.before(reset_btn)

reset_btn.onclick = () => {
    localStorage.removeItem('users')
    users = []
    render(users)
}

let storageData = JSON.parse(localStorage.getItem('users'))
let users = storageData ?? []
render(users)

form.onsubmit = (e) => {
    e.preventDefault()
    let dataList = new FormData(e.target)
    let data = Object.fromEntries(dataList)
    users.push(data)
    localStorage.setItem('users', JSON.stringify(users))
    render(users)

    // После события можем очистить форму от данных
    // form.reset()
}

function render(array){
    console.log(array)
    div_container.innerHTML = ''
    for (let elem of array){
        let div_card = document.createElement('div')
        let p_fullname = document.createElement('p')

        div_card.className = 'user_card'
        p_fullname.innerText = `${elem.name} ${elem.lastname}`

        div_card.append(p_fullname)
        div_container.append(div_card)
    }
}