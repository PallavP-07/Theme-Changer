import "./App.css";
import ThemeChanger from "./ThemeChanger";
import { ThemeProvider } from "./theme-context";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1>E-commerce App</h1>
        </header>
        <main>
          <ThemeChanger />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
