import { Link } from "react-router-dom";
import Button from "./components/UI/Button/Button";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {

  const [active, setActive] = useState(false)

  // Реализовать в компоненте Modal кнопку 'X', который закроет моадльное окно

  return (
    <div>
      <Link to={'/reg'}>
        <Button onClick={()=>setActive(true)} title={'Регистрация / Авторизация'} color={'yellow'}/>
      </Link>
      <Modal active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
