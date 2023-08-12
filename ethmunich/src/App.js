import logo from './logo.svg';
import './App.css';
import SimpleBottomNavigation from './SimpleBottomNavigation'; // Assuming they are in the same directory

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        <SimpleBottomNavigation />
      </div>
  );
}

export default App;
