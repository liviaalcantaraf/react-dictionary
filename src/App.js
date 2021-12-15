import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>

        <footer className="App-footer">Coded by Lívia A.</footer>
      </div>
    </div>
  );
}

export default App;
