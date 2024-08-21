import logo from './holberton-logo.jpg';
import './App.css'

function App() {
  console.log(logo)
  return (
    <>
      <header className="App-header">
        <img width={200} height={200} src={logo} alt="Holberton School logo"></img>
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </>
  );
}

export default App;
