import Header from "./components/Header/Header";
import './App.css'
import Block1 from "./components/Block1/Block1";
import Block2 from "./components/Block2/Block2";
import { useRef } from "react";


function App() {

  let block1Ref = useRef()
  let block2Ref = useRef()

  return (
    <div>
      <Header/>
      <Block1 ref={block1Ref}/>
      <Block2 ref={block2Ref}/>
    </div>
  );
}

export default App;


// Задание: 
// По нажатию на элементы меню реализовать скролл до div элементов
