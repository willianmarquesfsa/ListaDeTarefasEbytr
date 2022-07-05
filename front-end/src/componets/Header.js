import React, { Component } from 'react';
import PropTypes from 'prop-types'
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

    render() {
        // const { carregando, user } = this.state;
        return (
            <div className="header">
                <Link to="/tarefas" >Adicionar tarefa</Link>
                <button
                    onClick={this.props.sair}
                    type="button"                    
                >
                    Sair
                </button>

            </div>
        );
    }
}

Header.propTypes = {
    sair: PropTypes.func.isRequired,
};