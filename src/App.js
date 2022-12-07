import logo from './logo.svg';
import './App.css';
//import TaskListComponent from './components/container/task_list';
//import Ejemplo1 from './hooks/ejemplo1.jsx'
//import Ejemplo2 from './hooks/ejemplo2';
import Ejemplo4 from './hooks/ejemplo4'
import MiComponenteConContexto from './hooks/ejemplo3.jsx';
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
        {/*<TaskListComponent></TaskListComponent>*/}

        {/*Ejemplo de uso de HOOKS*/}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2*/}
        <MiComponenteConContexto></MiComponenteConContexto>
        <Ejemplo4 nombre = 'Javier'>
        {/* Todo lo que haya aquí es tratado como props.children */}
          <h3>
            contenido del props.children
          </h3>
        </Ejemplo4>
        </header>
    </div>
  );
}

export default App;
