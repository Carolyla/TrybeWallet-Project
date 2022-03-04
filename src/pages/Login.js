import React from 'react';

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
 function handleClick () {
  console.log('clicou')
  }

  // fazer uma onchange  e uma onclick!
  // const email = (value) => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  //   ? 'Invalid email address'
  //   : undefined);
  render() {
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

export default Login;
// validar com a função onchange, depois habilitar
