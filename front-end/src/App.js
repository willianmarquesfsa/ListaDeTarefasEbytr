import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PainelTarefas from './pages/painelTarefas';
import LoginCreate from './pages/LoginCreate';
import loginValidate from '../src/service/loginValidade';
import Login from './pages/login';


import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      logado: true      
    };
  }

  componentDidMount() {
    this.loginValidatee()    
  }

  loginValidatee = async () => {
    if(localStorage.getItem('token') !== '')  {
      console.log(localStorage.getItem('token'))
    const result = await loginValidate();
    if(result.data.login === 'ok') {
       this.mudarlogado()
     }
    }
  }

  mudarlogado = () => {
    console.log('foi')
    // this.loginValidatee() 
    localStorage.setItem('logado', true);
    this.setState({ logado: true });
  };

  sair = () => {
    localStorage.setItem('logado', false);
    localStorage.setItem('token', '');
    this.setState({ logado: false });
  };

  render() {
    const { logado } = this.state;
  return (
    <div className="App">
      <Route path="/tarefas">
      {!logado ? (
                <Redirect to="/login" />
              ) : (
                <PainelTarefas sair={ this.sair } />
              )}
        </Route>
      <Route path="/login"  >
      {logado ? (
                <Redirect to="/tarefas" />
              ) : (
                <Login mudarlogado={ this.mudarlogado } />
              )} 
      </Route>
      <Route path="/LoginCreate" render={ () => <LoginCreate mudarlogado={ this.mudarlogado }/> } />
     
           
      
    </div >
  );
}
}

export default App;
