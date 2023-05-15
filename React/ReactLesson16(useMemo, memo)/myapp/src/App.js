import { useState } from "react";
import './App.css'
import Counter from "./components/Counter";
import Burden from "./components/Burden";

function App() {

  let [counter1, setCounter1] = useState(0)
  let [counter2, setCounter2] = useState(0)

  return (
    <div >
      <div className="div_elem">
        <Counter elem={'count1'} value={counter1}/>
        <button onClick={() => setCounter1(++counter1)}>+</button>
      </div>
      <div className="div_elem">
        <Counter elem={'count2'} value={counter2}/>
        <button onClick={() => setCounter2(++counter2)}>+</button>
      </div>
      <Burden counter2={counter2}/>
    </div>
  );
}


// useMemo мемоизирует отдельные функции внутри компонента

// memo мемоизирует весь компнент в целом (застялвяет обновляться строго по новым получаемым пропам)
// Дефолтное условие, по которому memo понимает когда нужно обновлять компонент
// старый проп != новый проп


export default App;
