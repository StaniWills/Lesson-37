// Задача 1
// 1) Создать класс Object2
// 2) Сделать полную копию метода values() примечание (метод должен быть статичным,
//    метод должен получать объект и возвращать новый массив)
// 3) Допишите еще одно статиечский метод, который полностью повторяет метод entries.

// let user = {name: 'name', salary: 100, id: 1}

// class Object2{
//     static values(obj){
//         let array = []
//         for (let key in obj){
//             array.push(obj[key])  
//         }
//         return array  
//     }
//     static entries(obj){
//         let array = []
//         for (let key in obj){
//             array.push([key, obj[key]])
//         }
//         return array
//     }
// }

// console.log(Object.entries(user))
// console.log(Object2.entries(user))

// Пример класса, который использует статическое свойство 
// Задача: написать процесс, который будет считать итоговое количество созданных экземпляров.

// class Users{
//     static count = 0

//     constructor(name, age){
//         this.name = name
//         this.age = age
//         Users.count++
//     }
// }

// let user1 = new Users('Alex', 30)
// let user2 = new Users('Neena', 25)
// let user3 = new Users('Steven', 35)
// let user4 = new Users('Steven', 40)

// console.log(Users.count)


// ----------------------------------
// Геттеры и сеттеры

// Метод get (Геттер) - это метод, который позволяет прочитать сво-во объекта
// Особенность: 
// 1) обращение к геттеру происходит как к свойству.
// 2) геттер не может получать аргументы
// 3) геттер перезаписать невозможно

// Пример 1
// let pet = {
//     name: 'Шарик',
//     breed: 'Пудель',
//     get nameBreed(){
//         return `${this.name} - это ${this.breed}`
//     }
// }
// pet.name = 'Диксон'
// console.log(pet.nameBreed)
//              Диксон - это Пудель

// Пример 2
// let obj = {
//     numbers: ["Один","Два","Три","Четыре"],
//     get lastValue(){
//         return this.numbers[this.numbers.length - 1]
//     }
// }

// obj.numbers.push('Пять')

// Getter перезаписать нельзя
// obj.lastValue = 'Tigran'

// console.log(obj.lastValue)
//                  'Пять'

// ---------------------------------------
// Задача:
// задан объект obj. Определите новое сво-во которое будет хранить 
// разницу первого и последнего элемента массива array

// let obj = {
//     array: [10,40,30,40],
//     get difference(){
//         return Math.abs(this.array[0] - this.array[this.array.length - 1])
//     }
// } 

// console.log(obj.difference)

// ----------------------
// Метед set (Setter, Cеттер)
// Позволяет переопределить сво-во объекта
// Почти такая особенность, как у getter, но: 
// 1) setter явно должен получить только 1 аргумент. Не меньше, не больше
// 2) сеттер так же является сво-вом. аргумент передается через знак =.
// 3) сеттер в теле переопределяет указанные сво-ва объекта на переданный аргмуент

// let obj = {
//     numbers: ["Один","Два","Три","Четыре"],
//     get lastValue(){
//         return this.numbers[this.numbers.length - 1]
//     },
//     set setArray(value){
//         this.numbers = array
//     }
// }

// obj.setArray = '1 2 3 4 5'
// console.log(obj.numbers)
// console.log(obj.lastValue)

// ---------------------------

// class User{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     get getAge(){
//         return `Год рождения пользователя ${this.name} - ${new Date().getFullYear() - this.age}`
//     }
//     set setAge(year){
//         this.age = new Date().getFullYear() - year
//     }
// }

// let user1 = new User('Alex', 25)

// user1.setAge = 1984
// console.log(user1.getAge, user1.age)

// -------------------------------
// Приватное сво-во

// Приватное сво-во задается через #

// class User{
//     #string = 'test'
//     #checkString(value){
//         if (value != this.#string) {
//             console.log('не строка')
//         } else {
//             console.log('строка')
//         }
//     }
// }

// let exampl = new User()

// console.log(exampl.#string)
// console.log(exampl.#checkString('string'))
// Ошибки, т,к экземпляр не может ссылаться на приватное сво-во

// ------------
// Однако, доступ к приватным сво-вам может получить getter, а изменить setter

// class User{
//     #string = 'test'

//     get readString(){
//         return this.#string
//     }

//     set setString(value){
//         if (typeof value != 'string'){
//             throw new Error('Данный тип не поддерживается')
//         } else {
//             this.#string = value
//         }
//     }
// }


// let exampl = new User()

// // console.log(exampl.#string)
// // console.log(exampl.#checkString('string'))

// console.log(exampl.readString)
// exampl.setString = 'string'
// console.log(exampl.readString)
// // console.log(exampl.#checkString('string'))
