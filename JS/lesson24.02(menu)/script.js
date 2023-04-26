let menu = document.querySelector('.menu')
let content = document.querySelector('.content')

menu.addEventListener('click', () => open_menu())

let setModal = false

function open_menu(){
    if (!setModal) {
        let menu_elems = ['Home', 'About', 'Contacts', 'Q&A', 'Auth']
        let modal_div = document.createElement('div')
        modal_div.className = 'modal'

        for (let elem of menu_elems){
            let p_elem = document.createElement('p')
            p_elem.innerText = elem
            modal_div.append(p_elem)
        }

        content.after(modal_div)
    } else {
        let modal = document.querySelector('.modal') 
        modal.remove()
    }
    
    setModal = !setModal
}