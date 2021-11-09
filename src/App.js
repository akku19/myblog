
import './App.css';
import './custom.css';
import navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
     <header className="main_header">
      <div className="logo">
          <img src={logo} className="" alt="logo" />
      </div>
      <div className="menu">
        <Header />
      </div>
    </header>

      <header className="App-header">
        <img src={logo} className="App-logo1" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
