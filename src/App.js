import logo from "./logo.jpeg";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <img src={logo} className="App-logo img-fluid" alt="logo" />
       <h1 className="brand-name text-center"> SMEO Dictionary </h1>
      </header>
      <main>
        <Dictionary defaultKeyword="Ocean" />
      </main>
      <footer className="App-footer text-center"> <small>Coded by Stella-Maris Ojideh </small> </footer>
      </div>
    </div>
    
  );
}

export default App;
