import styles from './AddItem.module.css'

function AddItem(props) {
  const {addTodo} = props

  const addHandle = (e) => {
    if (e.key === 'Enter'){
      addTodo(e.target.value)
    }
  }

    return (
      <div className={styles.input_container}>
        <input onKeyDown={addHandle} className={styles.input_elem}/>
      </div>
    );
  }
  
  export default AddItem;
  