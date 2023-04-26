// Task 1, 4

// let someObj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
// }
    
// function getKeys(obj){
//     let array = []
//     for (let key in obj){
//         array.push(key)
//     }
//     return array
// }

// function getEntries(obj){
//     let array = []
//     for (let key in obj){
//         array.push([key, obj[key]])
//     }
//     return array
// }


// console.log(getKeys(someObj))
// console.log(getEntries(someObj))


// -----------------
// Task 2

// let numbers = [1,2,3,4,5,6,7,8,9]

// Решение 1
// function getAvg(array){
//     let sum = 0
//     for (let elem of array){
//         sum = sum + elem
//     }
//     return sum / array.length
// }

// Решение 2
// function getAvg(array){
//     let sum = array.reduce((sum, value) => sum + value)
//     return sum / array.length
// }

// Решение 3

// let getAvg = (array) => array.reduce((sum, value) => sum + value / array.length, 0) 
// console.log(getAvg(numbers))

// -----------------
// Task 3

// let array = [1,true,'3','value1',9,'key']

// let countString = (array) => console.log(array.filter(elem => typeof elem == 'string').length)

// countString(array)

// Решение 2
// function countString(array){
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'string')
//             count++;
//     }
// }

// Решение 3
// let result = array.reduce((acc, cur) => (typeof cur == 'string') ? acc + 1 : acc, 0); 
// console.log(`Количество элементов string = ${result}`);

// -----------------
// Task5 

// let array = [1,true,'3','value1',9,'key']

// let obj = {}
// Решение 1
// for (let i in array){
//     obj[`key${+i+1}`] = array[i]
// }

// Решение 2 
// array.forEach((el, ind) => (obj[`key${ind + 1}`] = el));

// console.log(obj)