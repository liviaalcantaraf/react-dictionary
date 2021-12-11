import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-img" alt="appimg" />
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className="App-footer">Coded by Lívia A.</footer>
      </div>
    </div>
  );
}

export default App;
