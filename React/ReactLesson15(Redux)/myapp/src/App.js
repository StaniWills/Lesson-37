// import './App.css';
import {useSelector } from "react-redux";
import Count from "./components/Count";
import Users from "./components/Users";
import Employees from "./components/Employees";
import Cart from "./components/Cart";
import Example from "./components/Example";

function App() {

  // useSelector позволяет получить с Provider значение хранилища (store)
  // В качестве аргумента указывает какой стейт необходимо получить
  let count = useSelector(store => store.count.count)
  let empl = useSelector(store => store.empl)
  let users = useSelector(store => store.users.users)
 
  return (
    <div>
      <Count count = {count}/>
      <Employees empl = {empl}/>
      <Users users = {users}/>
      <Cart/>
      <Example/>
    </div>
  );
}

export default App;
