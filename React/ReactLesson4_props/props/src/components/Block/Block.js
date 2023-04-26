import './Block.css'

function Block({title, text, color, size, isRead}) {
    // const title = props.title
    // const post = props.post

    // const { title, text, color, size } = props

    return (
      <div className={`block_item ${size}`} style={{backgroundColor: color}}>
        <h2>{title}</h2>
        <p>{text}</p>
        {/* { isRead === true ? <p>Read</p> : null} */}
        { isRead && <p>Read</p> }
        

      </div>
    )
  }
  
  export default Block
