import logo from './logo.svg';
import './App.css';
import BasicModal from './modal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         חיפוש מתקדם
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BasicModal/>
      </header>
    </div>
  );
}

export default App;
