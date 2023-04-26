// Создание и удаление и перемещние элементов по DOM - узлам

// -------------------------
// Создание элементов 
// let elem = document.createElement('div')

// -------
// Заполнение элемента
// Заполнение текстового сво-ва тега 

// elem.innerText = '<b>Alex</b>'   - запись содержимого тега без учета разметка
// elem.innerHTML = '<b>Alex</b>'   - запись содержимого тега с учетом разметки

// elem.innerText = 'Test'
// ----------
// Заполнение атрибутов

// elem.id = 'elem5'            - указание ID для созданного тега
// elem.className = 'elem5'     - указание class для созданного тега
// elem.classList.add('elem_1')     - указание множество классов используя массив
// elem.classList.remove('elem_1')  - удаление множество классов используя массив
// ----------
// Сво-во элементов style для указания стилизации

// elem.style.color = 'orange'
// elem.style.fontSize = '50px'

// -----------
// Метод setAttribute() 
// Позволяет задать любой атрубит с значением

// elem.setAttribute('href', 'https://google.com')

// removeAttribute() удаляет атрибут с тега
// elem.removeAttribute('href')

// --------------
// let div_elem = document.querySelector('.div_elem')
// div_elem.append(elem)

// append   - вставка элемента как послендего ребенка
// prepend  - вставка элемента как первого ребенка
// before   - вставка элемента как предыдущий братский узел 
// after    - вставка элемента как следующий братских узел


// let div_elem = document.querySelector('.div_elem')
// let h_elem = document.createElement('h3')
// h_elem.innerText = 'Text'
// div_elem.after(h_elem)
// div_elem.append(h_elem)
// div_elem.prepend(h_elem)
// div_elem.before(h_elem)

// --------------------------
// перемещение уже существующих элементов
// let p_elem = document.querySelector('.p_elem') 
// document.body.prepend(p_elem)

// ---------------------
// создание копии содержимого тега p_elem
// clone = p_elem.cloneNode(true)
// document.body.prepend(clone)

// --------------------------
// Удаление Dom - узла
// let p_elem = document.querySelector('.p_elem') 

// Удаление содержимого тега
// Вариант 1
// p_elem.innerHTML = ''

// Вариант 2
// let b_elem = document.querySelector('b')
// p_elem.removeChild(b_elem)

// Удаление тега
// p_elem.remove()

// ---------------------------------------
// Задание 1. 
// 1. Создайте ul список внутри body и поместите туда 3 li элемента с текстовым сво-вом (1,2,3)

// UL тег
// let ul_elem = document.createElement('ul')
// document.body.prepend(ul_elem)

// LI тег
// for (let i = 1; i <= 3; i++){
//     let li_elem = document.createElement('li')
//     li_elem.innerText = i
//     ul_elem.append(li_elem)
// }

// ------------------------------------------
// Определние существующего в разметке элемента

// firstElementChild            - поиск первого ребенка
// lastElementChild             - поиск последнего ребенка
// nextElementSibling           - поиск следующего братского узла
// previusElementSibling        - поиск предыдщуего братского узла
// parantElement                - поиск родителя

// let elem = document.body.firstElementChild.lastElementChild
// console.log(elem)


// ------------------------
// задание 1
// Сформировать содержимое li (3) элемента в полужирный шрифт

// Решение
// let li_3 = document.body.firstElementChild.firstElementChild.lastElementChild.previousElementSibling
// li_3.innerHTML = `<b>${li_3.innerText}</b>`
// console.log(li_3)

// -----------

// задание 2
// Заменить содержимое заголовка h2 на обычный текст

// Решение 
// let h2_elem = document.body.firstElementChild.lastElementChild.firstElementChild.firstElementChild
// let p_elem = document.createElement('p')
// p_elem.innerText = h2_elem.innerText
// h2_elem.parentElement.prepend(p_elem)
// h2_elem.remove()


// -------------------------

// А) Элемент нужно создать 
    // 1. Создать элемент (createElement)
    // 2. Заполнение элемента (innerText, className ... id)
    // 3. Вставка элемента в DOM

// Б) Элемент уже существует 
    // 1. Поиск элемента (querySelector)
    // 2. Изменение элементов по ТЗ (Переменщие, удаление)

   

// let p_elems = document.querySelectorAll('p')
// p_elems.forEach((elem, ind) => elem.className = `elem${++ind}` )
