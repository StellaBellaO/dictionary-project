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
      <footer className="App-footer text-center"> <small>🗄️ This Project was coded by < a href="https://gleeful-bubblegum-ab91e6.netlify.app/index.html" target="_blank" rel="noopener noreferrer"> Stella-Maris Ojideh </a> {" "} and is {" "} <a href="https://github.com/StellaBellaO/dictionary-project" target="_blank" rel="noopener noreferrer" class="github">open-sourced on GitHub </a> {" "} and <a href="https://app.netlify.com/sites/spiffy-manatee-3e127b/overview" target="_blank" rel="noopener noreferrer"> hosted on Netlify 🗄️ </a> </small> </footer>
      </div>
    </div>
    
  );
}

export default App;
