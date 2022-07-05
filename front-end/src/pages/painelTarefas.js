import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getTasks from '../service/getTasks';
import Header from '../componets/Header';

export default class PainelTarefas extends Component {

    constructor() {
        super();
        this.state = {
            lista: [],
        };
    }

    async componentDidMount() {
        await this.buscarTarefas();
    }

    buscarTarefas = async () => {
        const result = await getTasks();
        const { data: { Lista } } = result
        this.setState({ lista: Lista })
        console.log(Lista[0])
    };


    render() {
        const { lista } = this.state;

        return (
            <div >
                <Header sair={ this.props.sair }/>
                {lista.map((ele, i) => <div key={i} className="box">
                <p>Atribuido a: {ele.name}</p>
                <p>Descrição: {ele.describe}</p>
                <p>Status: {ele.status}</p>
                <p>Data de Criação: {ele.dataDaSolicitacao}</p>
            </div>
            )}

            </div>
        );
    }
}

PainelTarefas.propTypes = {
    sair: PropTypes.func.isRequired,
};
