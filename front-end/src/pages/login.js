import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loginValidate from '../service/loginValidade';
// import postLogin from '../service/postLogin';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfir: '',
            carregando: false,
        };
    }

    inputdataNa = ({ target }) => {
        this.setState({ name: target.value });
    };

    inputdataEm = ({ target }) => {
        this.setState({ email: target.value });
    };

    inputdataPassord = ({ target }) => {
        this.setState({ password: target.value });
    };

    fucreauser = async () => {
        const { email, password } = this.state;
        const { mudarlogado } = this.props;

        this.setState({ carregando: true });
        try {
            const result = await loginValidate({ email, password });
            window.localStorage.setItem('token', result.data.token)
            mudarlogado();
        } catch (error) {
            console.error(error);
        }
    }



render() {
    const { carregando, email, password } = this.state;
    const tres = 1;
    return (
        <div data-testid="page-login">
            <p>Login</p>
            {!carregando ? (
                <form>
                    <label htmlFor="name">
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
                        <button
                            onClick={this.fucreauser}
                            type="button"
                            disabled={password.length < tres}
                            data-testid="login-submit-button"
                        >
                            Entrar
                        </button>
                    </label>
                </form>
            ) : (
                'Carregando...'
            )}
            <Link to="/LoginCreate" >Criar Usuario</Link>
        </div>
    );
};
}



Login.propTypes = {
    mudarlogado: PropTypes.func.isRequired,
};

