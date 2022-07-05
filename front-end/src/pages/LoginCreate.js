import React, { Component } from 'react';
import PropTypes from 'prop-types';
import postLogin from '../service/postLogin';

export default class LoginCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfir: '',
        };
    }

    fucreauser = async () => {
        const { name, email, password, passwordConfir } = this.state;
        const { mudarlogado } = this.props;
        if (passwordConfir !== password) { alert('Senha não são identicas') }
        else {
            this.setState({ carregando: true });
            try {
                const result = await postLogin({ name, email, password });
                window.localStorage.setItem('token', result.data.token)
                mudarlogado();
            } catch (error) {
                console.error(error);
            }
        }
    };

    inputdataNa = ({ target }) => {
        this.setState({ name: target.value });
    };

    inputdataEm = ({ target }) => {
        this.setState({ email: target.value });
    };

    inputdataPassord = ({ target }) => {
        this.setState({ password: target.value });
    };

    inputdataPassordConfirm = ({ target }) => {
        this.setState({ passwordConfir: target.value });
    };


    render() {
        const { carregando, name, email, password, passwordConfir } = this.state;
        const tres = 3;
        return (
            <div data-testid="page-login">
                <p>Login</p>
                {!carregando ? (
                    <form>
                        <label htmlFor="name">
                            <input
                                name="name"
                                type="text"
                                data-testid="login-name-input"
                                value={name}
                                onChange={this.inputdataNa}
                            />
                            <input
                                name="email"
                                type="text"
                                placeholder='email'
                                data-testid="login-email-input"
                                value={email}
                                onChange={this.inputdataEm}
                            />
                            <input
                                name="password"
                                type="password"
                                placeholder='password'
                                data-testid="login-email-input"
                                value={password}
                                onChange={this.inputdataPassord}
                            />
                            <input
                                name="passwordConfirm"
                                type="password"
                                placeholder='password Confirm'
                                data-testid="login-email-input"
                                value={passwordConfir}
                                onChange={this.inputdataPassordConfirm}
                            />
                            <button
                                onClick={this.fucreauser}
                                type="button"
                                disabled={name.length < tres}
                                data-testid="login-submit-button"
                            >
                                Entrar
                            </button>
                        </label>
                    </form>
                ) : (
                    'Carregando...'
                )}
            </div>
        );
    }
}


LoginCreate.propTypes = {
    mudarlogado: PropTypes.func.isRequired,
};

