import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sendEmail from '../actions';

class Login extends React.Component {
  state ={
    buttonIsDisabled: true,
    email: '',
    senha: '',
  }

  handleChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState(
      {
        [name]: value,
      },
      () => {
        const { email, senha } = this.state;
        const numMax = 6;
        if (
          senha.length >= numMax
          && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
        ) {
          this.setState({ buttonIsDisabled: false });
        } else {
          this.setState({ buttonIsDisabled: true });
        }
      },
    );
  };

  handleClick = () => {
    console.log('clicou');
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(sendEmail(email));
    history.push('/carteira');
  }

  // fazer uma onchange  e uma onclick!
  // const email = (value) => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  //   ? 'Invalid email address'
  //   : undefined);
  render() {
    console.log(this.props);
    const { email, buttonIsDisabled, senha } = this.state;
    return (
      <>
        <form action="">
          <h3> Login </h3>
          <label htmlFor="email">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
        </form>
        <label htmlFor="senha">
          <input
            type="password"
            placeholder="Digite sua senha"
            name="senha"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ senha }
          />
        </label>
        <button
          data-testid="login-submit-button"
          type="submit"
          disabled={ buttonIsDisabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
// validar com a função onchange, depois habilitar
