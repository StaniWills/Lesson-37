import Main from "./components/Main";
import './App.css'
import { useState } from "react";
import { Context } from "./context/Context";

function App() {

  let [string, setString] = useState('state')

  return (
    <Context.Provider value={{string}}>
      <div>
            App
            <p>{string}</p>
            <Main/>
      </div>
    </Context.Provider>
  );
}

export default App;
