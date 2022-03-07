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
      <div className="limiter">
        <div className="wrap-header">
          <div>
            <header className="header-login">
              <div>
                <h2>TrybeWallet</h2>
              </div>
              <div>
                <h3>A sua carteira digital</h3>
              </div>
            </header>
          </div>
        </div>
        <hr />
        <div className="container-login100">
          <div className="wrap-login100 p-t-30 p-b-50">
            <span className="login100-form-title p-b-41">Login</span>
            <form
              action=""
              className="login100-form validate-form p-b-33 p-t-5"
            >
              <label className="wrap-input100 validate-input" htmlFor="email">

                <input
                  className="input100"
                  type="text"
                  placeholder="Digite seu e-mail"
                  name="email"
                  data-testid="email-input"
                  onChange={ this.handleChange }
                  value={ email }
                />
                <span
                  className="focus-input100"
                  data-placeholder="&#xe82a;"
                />

              </label>

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
                <span
                  className="focus-input100"
                  data-placeholder="&#xe80f;"
                />
              </label>

              <div className="button2">
                <div className="container-login100-form-btn m-t-32">
                  <button
                    className="login100-form-btn"
                    data-testid="login-submit-button"
                    type="submit"
                    disabled={ buttonIsDisabled }
                    onClick={ this.handleClick }
                  >
                    Entrar
                  </button>
                </div>
              </div>
            </form>
          </div>
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
