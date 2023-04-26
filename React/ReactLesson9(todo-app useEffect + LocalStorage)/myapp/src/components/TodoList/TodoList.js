import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css' 

function TodoList(props) {
    const {todos, changeTodo, deleteTodo} = props

    return (
      <div className={styles.todos_wrapper}>
        {todos.map(elem => 
            <TodoItem
                key = {elem.id}
                id = {elem.id}  
                title = {elem.title}
                complited = {elem.complited}
                changeTodo = {changeTodo} 
                deleteTodo = {deleteTodo} 
            />
        )}
      </div>
    );
  }
  
  export default TodoList;
  