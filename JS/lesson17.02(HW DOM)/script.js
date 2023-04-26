let select_item = document.querySelector('.select_item')
let div_root = document.querySelector('#root')


function prerender(){
    let storageData = JSON.parse(localStorage.getItem('products'))
    if (storageData){
        render(storageData)
    } else {
        fetchProductsList()
    }
}


function fetchProductsList(){
    let url = "https://dummyjson.com/products"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('products', JSON.stringify(data.products))
            render(data.products)
        })
}

function render(data){
    div_root.innerHTML = ''
    let div_container = document.createElement('div')
    div_container.className = 'div_container'
    div_root.append(div_container)

    for (let elem of data){
        let div_item = document.createElement('div')
        div_item.className = 'div_item'

        let img_elem = document.createElement('img')
        let p_title = document.createElement('p')
        let p_price = document.createElement('p')

        let x_mark = document.createElement('i')
        x_mark.className = 'las la-times pos'

        x_mark.onclick = (e) => {
            e.stopPropagation()
            data = data.filter(value => value.id != elem.id)
            localStorage.setItem('products', JSON.stringify(data))
            render(data)
        }

        img_elem.src = elem.images[0]
        img_elem.width = 300
        p_title.innerText = `Title: ${elem.title}`
        p_price.innerText = `Price: ${elem.price}$`


        div_item.append(img_elem, p_title, p_price, rating(elem.rating), x_mark)
        div_container.append(div_item)

        div_item.addEventListener('click', () => modal(elem))
    }

    select_item.onchange = (e) => {
        render(sortElems(data, e.target.value))
    }
}

function sortElems(data, type){
    if (type === '1'){
        data.sort((crElem, nxElem) => crElem.price - nxElem.price)
    } else if (type === '2'){
        data.sort((crElem, nxElem) => nxElem.price - crElem.price)
    } else if (type === '0'){
        data.sort((crElem, nxElem) => crElem.id - nxElem.id)
    }
    localStorage.setItem('products', JSON.stringify(data))
    return data
}


function modal(elem){
    // Modal Area
    let div_modal_area = document.createElement('div')
    div_modal_area.className = 'modal_area'

    // Modal container
    let div_modal_container = document.createElement('div')
    div_modal_container.className = 'modal_container'


    // Крестик, закрывающий модальное окно
    let x_mark = document.createElement('i')
    x_mark.className = 'las la-times pos'
    x_mark.addEventListener('click', () => div_modal_area.remove())


    // Формирование div элемента с описанием товара
    let div_item_modal = document.createElement('div')
    div_item_modal.className = 'item_modal'

    let img_item_modal = document.createElement('img')
    img_item_modal.src = elem.images[0]
    img_item_modal.height = 380

    let p_item_description = document.createElement('p')
    p_item_description.innerText = elem.description

    // Формирование div с картинками
    let div_images = document.createElement('div')
    div_images.className = 'images_container'

    for (let img of elem.images){
        let img_elem = document.createElement('img')
        img_elem.width = 250
        img_elem.className = 'item_image_modal'
        img_elem.src = img
        div_images.append(img_elem)

        img_elem.addEventListener('click', () => img_item_modal.src = img)
    }

    div_item_modal.append(img_item_modal, rating(elem.rating), p_item_description)


    div_modal_container.append(div_images,div_item_modal, x_mark)
    div_modal_area.append(div_modal_container)
    document.body.append(div_modal_area)
    
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


prerender()

