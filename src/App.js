import "./App.css";
import { Button } from "./Components/Button";
import { Screen } from "./Components/Screen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Screen />
        <Button />
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
