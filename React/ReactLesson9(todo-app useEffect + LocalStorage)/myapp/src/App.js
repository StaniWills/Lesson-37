import { useEffect, useState } from "react";
import AddItem from "./components/AddItem/AddItem";
import TodoList from "./components/TodoList/TodoList";


function App() {
  const start_todos = [
    {id: 1, title: 'Первая задача', complited: true},
    {id: 2, title: 'Вторая задача', complited: false},
    {id: 3, title: 'Третья задача', complited: false},
  ]

  let [todos, setTodos] = useState(start_todos)

  const addTodo = (title) => {
    const todo = {
      id: Math.max(...todos.map(elem => elem.id)) + 1,
      title: title,
      complited: false
    }
    setTodos([todo, ...todos])
  }

  // 1 Задание: 
  // Используя проп complited, сформируйте цвет background оп следующему правилу
  // Если complited true - тогда цвет фона должен быть зеленой
  // В противном случае красный 

  // -----------------
  // 2 задание:
  // Напишите функцию, которая будет менять сво-во complited (с true на false, false на true) 
  // по клику на TodoItem

  const changeTodo = (id) => {
    const newTodo = todos.map( elem => {
      if (id === elem.id ){
        elem.complited = !elem.complited
      }
      return elem
    })
    setTodos(newTodo)
  }

  // 3 Задание:
  // Напишите функцию, которая по двойному клику удалит элемент массива. 

  const deleteTodo = (id) => {
    const newTodo = todos.filter(elem => elem.id !== id)
    setTodos(newTodo)
  }

  // -------------------------------
  // useEffect + localStorage

  useEffect(() => {
    let todosItem = JSON.parse(localStorage.getItem('todos'))
    setTodos(todosItem)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])


  return (
    <div>
      <AddItem addTodo={addTodo}/>
      <TodoList 
        todos={todos}
        changeTodo={changeTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
