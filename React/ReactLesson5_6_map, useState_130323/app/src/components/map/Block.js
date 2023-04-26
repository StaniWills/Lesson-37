

function Block(props){

    const {title,text,id} = props
    
    return(
        <div>
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Block