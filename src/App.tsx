import logo from "./logo.svg";
import "./App.css";
import BasicModal from "./components/modal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>חיפוש מתקדם</p>
        <BasicModal />
      </header>
    </div>
  );
}

export default App;
