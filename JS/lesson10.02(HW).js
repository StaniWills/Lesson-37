// Task 1

// let order = { 
//     productName: "Велосипед", 
//     costomerName: "Саша", 
//     salesName: "Петя", 
//     totalPrice: 15000 
// } 

// let propertyObj = Object.getOwnPropertyDescriptor(order, 'totalPrice')
// console.log(Object.entries(propertyObj))

// Task 2

// let employees = { 
//     firstName: "Петя", 
//     lastName: "Иванов", 
//     ratePerDay: 2500, 
//     workingDays: 5, 
//     getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
// } 
    
// let array = []
// for (let key in employees){
//     if (typeof employees[key] == 'function'){
//         Object.defineProperty(employees, key, {enumerable: false})
//     }
// }

// let string = Object.keys(employees).join(', ')

// console.log(string)

// ---------------------------------
// Task 3

// class Delivery{
//     constructor(name,phone){
//         this.name = name
//         this.phone = phone
//     }

//     get validPhone(){
//         return this.phone.startsWith('+')
//     }
// }

// let company1 = new Delivery('Pizza', '+78987654')

// company1.phone = '1234567'
// console.log(company1.validPhone)

// ---------------------------
// Task 4 


// class Permissions {
//     constructor() {
//         this.create = false
//         this.read = true
//         this.update = false
//         this.remove = false
//     }
// }

// class User extends Permissions{
//     constructor(name){
//         super()
//         this.name = name
//     }
// }

// let user1 = new User('Alex')

// console.log( user1)