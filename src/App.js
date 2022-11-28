import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
//import GreetingF from './components/pure/greetingF.jsx'
//import Greeting from './components/pure/greeting.jsx'


function App() {
  return (
    <div className="App">
      <header classNam e="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/*Componente de ejemplo funcional*/}
        {/*<Greeting name = "Javier"></Greeting>*/}
        {/*<GreetingF name = "Javier"></GreetingF>*/}

        {/*Componente de Listado de tareas*/}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
