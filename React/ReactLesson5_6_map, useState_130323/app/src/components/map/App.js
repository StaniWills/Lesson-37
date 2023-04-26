import Block from "./Block"

function App(){
    const data = [
        {id: 1, title: 'Тайтл 1',text: 'Текст 1'},
        {id: 2, title: 'Тайтл 2',text: 'Текст 2'},
        {id: 3, title: 'Тайтл 3',text: 'Текст 3'},
        {id: 4, title: 'Тайтл 4',text: 'Текст 4'},
    ]

    // Метод map позволяет циклично пройтись по массиву и вернуть массив из компонентов, 
    // которые распакуются друг за другом

    // key является важным атрибутом, который должен ссылаться на первичный (уникальный) ключ 
    // и должен передавать уникальное значение среди всех элементов массива 

    return(
        <div>
            {data.map((elem) => <Block 
                                    key={elem.id}
                                    title={elem.title} 
                                    text={elem.text} 
                                    id={elem.id}
                                />)} 
        </div>
    )
}

export default App


