import "./App.css";
import Dictionary from "./Dictionary";
import illustration from "./illustration.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Dictionary{" "}
          <img
            src={illustration}
            width="180"
            className="illustration img-fluid"
            alt="illustration"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="travel" />
        </main>

        <footer className="App-footer">
          <a
            href="https://github.com/liviaalcantaraf/react-dictionary"
            className="open-code"
          >
            {" "}
            Open-source code
          </a>{" "}
          by Lívia A.
        </footer>
      </div>
    </div>
  );
}

export default App;
