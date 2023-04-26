import styles from './TodoItem.module.css'

function TodoItem(props) {

    const {id, title, complited, changeTodo, deleteTodo} = props

    const div_style = {
      backgroundColor: (complited) ? 'green' : 'red'
    }

    return (
      <div 
        className={styles.todo_elem} 
        style={div_style}
        onClick={() => changeTodo(id)}
        onDoubleClick={() => deleteTodo(id)}
      >
        <h2>{title}</h2>
        <p>{''+complited}</p>
      </div>
    );
  }
  
  export default TodoItem;
  