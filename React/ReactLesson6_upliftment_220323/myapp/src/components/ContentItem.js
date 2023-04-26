
function ContentItem(props){

    const {name, price, check, isSale} = props
    
    const card_style = {
        margin: 25, 
        border: '1px solid black', 
        width: '250px', 
        textAlign: 'center'
    } 

    return(
        <div style={card_style}>
            <h2>{name}</h2>
            <p style={{color: (isSale) ? 'red' : 'black'}}>{price}</p>
            {check && <p>Просмотрен</p>}
        </div>
    )
}

export default ContentItem

