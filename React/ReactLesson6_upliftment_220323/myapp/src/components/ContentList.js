import ContentItem from "./ContentItem"

function ContentList(props){

    const {card} = props

    return(
        <div>
            {card.map(elem => <ContentItem 
                                    key={elem.id}
                                    name={elem.name} 
                                    price ={elem.price}
                                    check={elem.check}
                                    isSale={elem.isSale}
                                />)}
        </div>
    )
}

export default ContentList