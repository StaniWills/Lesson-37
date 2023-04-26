const frame = document.querySelector('.frame')

let slider_index = 0

const images = [
    'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
    'https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
    'https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg',
    'https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg'
]


const cards = document.createElement('div')
cards.className = 'cards'


for (let elem of images){
    let card = document.createElement('div')
    card.className = 'card'
    card.style.backgroundImage = `url(${elem})`
    cards.append(card)
}

frame.append(cards)

let [left_btn, right_btn] = document.querySelectorAll('.triggers')

function go_right(){
    if (slider_index < images.length - 1){
        slider_index++
        cards.style.left = `${-1 * slider_index * frame.offsetWidth}px`
    } else {
        slider_index = 0
        cards.style.left = `${-1 * slider_index * frame.offsetWidth}px`
    }
}

function go_left(){
    if (slider_index != 0){
        slider_index--
        cards.style.left = `${-1 * slider_index * frame.offsetWidth}px`
    } else {
        slider_index = images.length - 1
        cards.style.left = `${-1 * slider_index * frame.offsetWidth}px`
    }
}

right_btn.addEventListener('click', go_right)
left_btn.addEventListener('click', go_left)


console.log(frame.offsetWidth)
console.log(window.innerWidth)