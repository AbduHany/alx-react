import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  return (
    <>
      <header className="App-header">
        <img width={200} height={200} src={logo} alt="Holberton School logo"></img>
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email:</label>
        <input type="email" id="email" />
        <label for="password">Password:</label>
        <input type="password" id="password"></input>
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
  );
}

export default App;
