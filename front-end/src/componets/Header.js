import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
// import { getUser } from '../services/userAPI';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            carregando: false,
        };
    }

    /*

  component = async () => {
    const tt = await getUser();
    this.setState({ user: tt.name });
    this.setState({ carregando: true });
  }
  */

    render() {
        // const { carregando, user } = this.state;
        return (
            <div className="header">
                <Link to="/tarefas" >Adicionar tarefa</Link>

            </div>
        );
    }
}