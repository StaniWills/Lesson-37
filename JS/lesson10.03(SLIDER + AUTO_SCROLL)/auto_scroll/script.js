let div_header = document.querySelector('.header_wrapper')

let div_content = document.createElement('div')
div_content.classList.add('content_wrapper')

div_header.after(div_content)


for (let i = 0; i < 100; i++){
    let div_item = document.createElement('div')
    div_item.classList.add('item')
    div_item.innerText = i
    div_content.append(div_item)
}

let [p1,p2,p3,p4] = document.querySelectorAll('p')

let items = document.querySelectorAll('.item')

for (let elem of items){
    elem.addEventListener('dblclick', () => {
        div_header.scrollIntoView({
            behavior: 'smooth'
        })
    })
}

p1.addEventListener('click', () => {
    // scrollTo(0, items[73].offsetTop)
    items[10].scrollIntoView({
        // Анимация
        behavior: 'smooth',
        // Конец/начало/центр окна браузера
        block: "start"
    })
})



