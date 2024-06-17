import { useContext } from "react";
import "./App.css";
import CountDown from "./components/CountDown";
import CountContextProvider from "./contexts/counter-context";
import Dummy from "./components/Dummy";

function App() {
  return (
    <CountContextProvider>
      <div className="App">
        <CountDown />
        <Dummy />
      </div>
    </CountContextProvider>
  );
}

export default App;
