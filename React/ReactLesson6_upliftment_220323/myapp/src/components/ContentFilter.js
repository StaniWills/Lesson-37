
function ContentFilter(props){

    const {deleteCardById, changeCheck, getSalesPrice,setDefaultPrice} = props

    return(
        <div>
            <button onClick={deleteCardById}>Удалить элемент</button>
            <button onClick={changeCheck}>Изменить проп check</button>
            <button onClick={getSalesPrice}>Сделать скидку</button>
            <button onClick={setDefaultPrice}>Вернуть начальную цену</button>
        </div>
    )
}

export default ContentFilter