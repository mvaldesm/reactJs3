import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Desafío 1 - Curso ReactJS</p>
        <a
          className="App-link"
          href="https://coderhouse.cl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir a CoderHouse
        </a>
      </header>
    </div>
  );
}

export default App;
