// ООП, шаблонизация

// --------
// let user1 = {
//     name: 'Alex',
//     age: 30,
//     salary: 1500,
//     sayHi(){
//         console.log(`Пользователь ${user1.name} говорит привет!`)
//     }
// }

// let user2 = {
//     name: 'Neena',
//     age: 25,
//     salary: 2000,
//     sayHi(){
//         console.log(`Пользователь ${user2.name} говорит привет!`)
//     }
// }

// user1.sayHi()
// user2.sayHi()

// ---------------------
// Шаблонизация через Function declaration
function createUser(name, age, salary){
    return {
        name,
        age,
        salary,
        sayHi(){
            console.log(`Пользователь ${this.name} говорит привет!`)
        }
    }
}

// Конструкция new работать не будет
// let createUser = (name, age) => ({
//     name,
//     age
// })

// let user1 = new createUser('Alex', 20)

// console.log(user1)


// ---------------------------
// Шаблонизатор как класс (class)

class User {
    // constructor определяет все сво-ва которые будут доступны экземплярам
    constructor(name, age, salary){
        this.name = name
        this.age = age
        this.salary = salary
        this.isJob = true
    }
    sayHi(){
        console.log(`Пользователь ${this.name} говорит привет!`)
    }
}

// let user1 = new User('Alex', 20, 1500)

// user1.name = 'Tigran'
// user1.sayHi()
// console.log(user1)


// Задача 1
// Напишите класс MathNum, который будет определять в экземплярах: 
// 1) Свойство number - числовое значение
// 2) Метод quad(), который должен выводить в консоль квадрат сво-ва number
// 3) Метод sqrt(), который должен выводить в консоль корень сво-ва number


// Решение 
// class MathNum{
//     constructor(num){
//         // Условный оператор опционально
//         if (typeof num == 'number'){
//             this.number = num
//         } else {
//             console.log('Error: num is not a number')
//         }
//     }
//     quad(){
//         console.log(this.number ** 2)
//     }
//     sqrt(){
//         console.log(this.number ** 0.5)
//     }
// }

// let number1 = new MathNum(25)
// number1.quad()
// number1.sqrt()

// let number2 = new MathNum('string')
// number2.sqrt()


// ---------------------------
// Статичсекие методы и свойства у классов - это методы и свойства, которые доступны только классу

// let date = new Date()

// console.log(date.now())  -- не работает, поскольку now() - статический метод, доступный только классу Date
// console.log(Date.now())  -- работает

// Известные нам статические методы
// Object.assign()
// Object.entries()
// Object.keys()
// Object.values()
// Date.now()
// Array.isArray()


// class Example{
//     constructor(prop){
//         this.prop = prop
//     }
//     method(){
//         console.log('method!')
//     }
//     // статический метод
//     static staticMethod() {
//         console.log('Static method!')
//     }
//     // статическое свойство
//     static staticProp = 'static prop'
// }

// let ex = new Example('test')

// Вызов обычных методов и сво-йств через экземпляр ex
// console.log(ex.prop)
// ex.method()

// Вызов статических методов и свойств
// ex.staticMethod() -- не работает

// Example.staticMethod()
// console.log(Example.staticProp)

// console.log(ex.staticProp)  undefined, поскольку сво-во является статическим. До него можно добраться через класс Example


