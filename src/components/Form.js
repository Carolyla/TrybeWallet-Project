import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendForm, fetchCoin } from '../actions';
import apiCoins from '../services/API';

const Alimentação = 'Alimentação';

class Form extends Component {
  state = {
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: Alimentação,
    exchangeRates: '',
  };

  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  handleChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  handleClick = async () => {
    console.log(this.props);
    const { fillEexchange } = this.props;
    this.setState({ exchangeRates: await apiCoins() }, () => {
      fillEexchange(this.state);
      this.setState((state) => ({
        id: state.id + 1,
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: Alimentação,
        exchangeRates: '',
      }));
    });
  };

  //  fillCurrencies = () => {
  //    const { dispatch } = this.props;
  //    dispatch(fetchCoin());
  //  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,

    } = this.state;
    const { currencyList } = this.props;
    console.log(this.props);
    return (
      <div className="container-form">
        <div className="form">
          <label htmlFor="valorDespesa">
            {' '}
            Valor Despesas:
            <input
              id="value"
              onChange={ this.handleChange }
              type="number"
              placeholder="Digite valor desejado"
              name="value"
              data-testid="value-input"
              value={ value }
            />
          </label>
        </div>
        {' '}
        <div className="form">
          Descrição da Despesa:
          <label htmlFor="description">
            <input
              id="description"
              onChange={ this.handleChange }
              type="text"
              name="description"
              data-testid="description-input"
              placeholder="Descrição da Despesa"
              value={ description }
            />
          </label>
        </div>
        <div className="form">
          <label htmlFor="currency">
            Moeda
            <select
              id="currency"
              name="currency"
              data-testid="currency-input"
              onChange={ this.handleChange }
              value={ currency }
            >
              {
                currencyList
                  .filter((item) => item !== 'USDT')
                  .map((item) => (
                    <option
                      data-testid={ item }
                      key={ item }
                      value={ item }
                    >
                      { item }

                    </option>

                  ))
              }

            </select>
          </label>
        </div>
        <div className="form">
          <label htmlFor="method">
            Método de pagamentos
            <select
              id="method"
              name="method"
              data-testid="method-input"
              onChange={ this.handleChange }
              value={ method }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
        </div>
        <div className="form">
          <label htmlFor="tag">
            Tipo de despesa
            <select
              id="tag"
              name="tag"
              data-testid="tag-input"
              onChange={ this.handleChange }
              valeu={ tag }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </div>
        <div className="button">
          <button onClick={ this.handleClick } type="submit">
            {' '}
            Adicionar Despesa
            {' '}
          </button>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.func.isRequired,
  fillEexchange: PropTypes.func.isRequired,
  currencyList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  currencyList: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchCoin()),
  fillEexchange: (state) => dispatch(sendForm(state)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
// criar uma função que faz o calculo e manda pro header
