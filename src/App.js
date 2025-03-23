import "./App.css";
import { React, useState } from "react";
import { Button } from "./Components/Button";
import { Screen } from "./Components/Screen";

function App() {
  const [isPhoneOn, setIsPhoneOn] = useState(false);
  const [inputNumbers, setInputNumbers] = useState([])
  const numbers = ["power", "call", 1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];

  return (
    <div className="App">
      <header className="App-header">
        <Screen power={isPhoneOn} input={inputNumbers}/>
        <Button input={inputNumbers} inputter={setInputNumbers} numbers={numbers} power={isPhoneOn} setPower={setIsPhoneOn}/>
      </header>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
