import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Desafío 2 - Curso ReactJS</p>
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
    </>
  );
}

export default App;
