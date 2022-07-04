import { Route } from 'react-router-dom';
import PainelTarefas from './pages/painelTarefas';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">     
      <Route exact path="/tarefas" component={PainelTarefas} />
      <Route path="/" component={NotFound} />
    </div >
  );
}

export default App;
