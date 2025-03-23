import "./App.css";
import { React, useState } from "react";
import { Button } from "./Components/Button";
import { Screen } from "./Components/Screen";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

function App() {
  const [isPhoneOn, setIsPhoneOn] = useState(false);
  const [inputNumbers, setInputNumbers] = useState([]);
  const numbers = ["power", "call", 1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];

  const handleKeypadInput = (event) => {
    if (isPhoneOn && inputNumbers.length != 10) {
      setInputNumbers([...inputNumbers, parseInt(event.target?.id)]);
    } else if (!isPhoneOn) {
      window.alert("Hmm...I may need to turn the phone on first...");
    } else {
      return false;
    }
  };

  const handleKeyPress = (event) => {
    if (isPhoneOn && inputNumbers.length != 10) {
      if (event.charCode >= 48 && event.charCode <= 57)
        setInputNumbers([...inputNumbers, event.charCode - 48]);
    } else if (!isPhoneOn) {
      window.alert("Hmm...I may need to turn the phone on first...");
    } else {
      return false;
    }
  };

  return (
    <div className="App" onKeyPress={handleKeyPress}>
      <header className="App-header">
        <Screen power={isPhoneOn} input={inputNumbers} />
        <Button
          handler={handleKeypadInput}
          input={inputNumbers}
          inputter={setInputNumbers}
          numbers={numbers}
          power={isPhoneOn}
          setPower={setIsPhoneOn}
        />
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
