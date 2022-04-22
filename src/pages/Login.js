import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sendEmail from '../actions';
import image from '../images/trybewallet.jpg';

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
      <div className="div-background">
        <header className="header-login">
          <div className="logo-login">
            <img src={ image } alt="logo trybe wallet" className="img-login" />
            <h2>TrybeWallet</h2>
          </div>
          <div>
            <h3>A sua carteira digital</h3>
          </div>
        </header>
        <div className="container" />
        <span className="login-title">ACCOUNT LOGIN</span>
        <div className="container-login">
          <form action="" className="login100-form validate-form p-b-33 p-t-5">
            <div className="label-float">
              <input
                className="input100"
                type="text"
                placeholder="Digite seu e-mail"
                name="email"
                data-testid="email-input"
                onChange={ this.handleChange }
                value={ email }
              />
            </div>
            <label className="wrap-input100 validate-input" htmlFor="senha">
              <input
                className="input100"
                type="password"
                placeholder="Digite sua senha"
                name="senha"
                data-testid="password-input"
                onChange={ this.handleChange }
                value={ senha }
              />
              <span className="focus-input100" data-placeholder="&#xe80f;" />
            </label>
            <div className="div-button">
              <button
                className="myButton"
                data-testid="login-submit-button"
                type="submit"
                disabled={ buttonIsDisabled }
                onClick={ this.handleClick }
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
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
