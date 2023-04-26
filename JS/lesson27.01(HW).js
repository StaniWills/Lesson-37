// Task 1

// function checkDate(){
//     let dateNow = new Date()
//     let dateNext = new Date(dateNow.getFullYear(),dateNow.getMonth() + 1, 0)
//     // let result = (dateNext.getTime() - dateNow.getTime()) / (1000 * 60 * 60 * 24)
//     let result = dateNext.getDate() - dateNow.getDate()
//     // console.log(Math.floor(result))
//     console.log(result)
// }

// checkDate()

// Task 2
// function isItFridayToday(){
//     let day = new Date().getDay()
//     if (day == 5){
//         console.log('Сегодня пятница!')
//     } else if (day == 4){
//         console.log('Завтра будет пятница!')
//     } else if (day == 6){
//         console.log('Вчера была пятница!')
//     } else {
//         console.log(`Пятница будет через ${5 - day} ${(day == 0) ? 'дней' : 'дня'}`)
//     }
// }

// function isItFridayToday(){
//     let day = new Date().getDay()
//     let array = [
//         'Пятница будет через 5 дней', 
//         'Пятница будет через 4 дня', 
//         'Пятница будет через 3 дня', 
//         'Пятница будет через 2 дня',
//         'Завтра будет пятница!',
//         'Сегодня пятница!',
//         'Вчера была пятница!'
//     ]
//     console.log(array[day])
// }

// isItFridayToday()

// Task3
// let prices = [ 
//     'Цена товара - 1200$', 
//     'Стоимость - 500$', 
//     'Цена не определена', '9999',
//     'Ценовая категория - больше 300$',
//     'Цена за услугу 500 EUR',
// ]

// function getInfo(array){
//     let result = [0,0]
//     array.forEach( elem => {
//         if (elem.startsWith('Цена')){
//             result[0]++
//         }  
//         if (elem.endsWith('$')){
//             result[1]++
//         }
//     })
//     return result
// }

// console.log(getInfo(prices))


// Task 4

// let arrays = [ 
//     '89840959944 exampleonemain@mail.ru', 
//     '+79840959933 forreason@yandex.net', 
//     'somemail@mail.ru', 
//     '89840959900 example@gmil.ru', 
//     '+79840959911', 
//     'grandthere@mail.ru',
//     'jetpackfor@gmail.ru',
//     'TEST 89840959922 some@yandex.com',
// ] 
    
// let emails = []
// let phones = []

// arrays.forEach( elem => {
//     let row = elem.split(' ')
//     if (row.length == 2){
//         phones.push(row[0])
//         emails.push(row[1])
//     } else {
//         if (elem.includes('@')){
//             emails.push(elem)
//         } else {
//             phones.push(elem)
//         }
//     }
// })

// console.log(emails)
// console.log(phones)


// Task 5 

// let phones = [ 
//     '4000 0012 0056 9499', 
//     '4000 0013 5456 7379', 
//     '4000 0014 1456 9869',  
//     '4000 0015 3466 7859', 
//     '4000 0016 3556 6899', 
//     '4000 0017 4456 4699'
//     ]

// phones = phones.map(elem => elem.replace(elem.slice(4,-4), '*'.repeat(5)))
// console.log(phones)