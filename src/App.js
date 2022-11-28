import logo from './logo.svg';
import './App.css';
import GreetingF from './components/pure/greetingF.jsx'

function App() {
  return (
    <div className="App">
      <header classNam e="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GreetingF name = "Javier"></GreetingF>
      </header>
    </div>
  );
}

export default App;
