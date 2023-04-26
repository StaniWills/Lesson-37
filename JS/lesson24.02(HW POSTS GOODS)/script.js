let div_root = document.querySelector('#root')
let triggers = document.createElement('div')
let goods_container = document.createElement('div')
let left_btn = document.createElement('button')
let right_btn = document.createElement('button')

left_btn.innerText = '<--'
right_btn.innerText = '-->'

triggers.className = 'trigger'
goods_container.className = 'container'

triggers.append(left_btn,right_btn)
div_root.append(triggers, goods_container)

function fetchProduct(id){
    let url = `https://dummyjson.com/products/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => render(data))
}

function rating(n){
    let count_stars = Math.round(n)
    let div_rating = document.createElement('div')
    div_rating.className = 'div_rating'
    
    for (let i = 0; i < 5; i++){
        let span_elem = document.createElement('span')
        if (count_stars > i){
            span_elem.className = 'fa fa-star active'
        } else {
            span_elem.className = 'fa fa-star'
        }
        div_rating.append(span_elem)
    }

    return div_rating
}

function render(data){
    goods_container.innerHTML = ''

    let goods_img = document.createElement('img')
    let goods_title = document.createElement('h1')
    let goods_price = document.createElement('p')

    goods_img.src = data.images[0]
    goods_title.innerText = `Title: ${data.title}`
    goods_price.innerText = `Price: ${data.price}$`

    goods_container.append(goods_img, goods_title, goods_price, rating(data.rating))

}

let queue = 1
fetchProduct(queue)

right_btn.addEventListener('click', () => {
    if (queue != 30){
        fetchProduct(++queue)
    }
})

left_btn.addEventListener('click', () => {
    if (queue != 1){
        fetchProduct(--queue)
    }
})

// Задача: автоматизировать процесс с ограничением перехода на следующий товар 
// через запрос 

// function fectLength(){
//     let url1 = `https://dummyjson.com/products/`
//     fetch(url1)
//         .then(res => res.json())
//         .then(data => console.log(data.products.length))
// }



