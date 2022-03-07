import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    valorDespesa: 0,
    descriçãoDespesas: '',
    moeda: '',
    metodo: '',
    tipoDespesa: '',
  };

  handleChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState(
      {
        [name]: value,
      },
    );
  }

  render() {
    console.log(this.props);
    return (
      <div className="container-form">
        <div className="form">
          <label htmlFor="valorDespesa">
            {' '}
            Valor Despesas:
            <input
              onChange={ this.handleChange }
              type="number"
              placeholder="Digite valor desejado"
              name="valorDespesa"
              data-testid="value-input"
            />
          </label>
        </div>
        {' '}
        <div className="form">
          Descrição da Despesa:
          <label htmlFor="descriçãoDespesas">
            <input
              onChange={ this.handleChange }
              type="text"
              name="descriçãoDespesas"
              data-testid="description-input"
              placeholder="Descrição da Despesa"
            />
          </label>
        </div>
        <div className="form">
          <label htmlFor="moeda">
            Moeda
            <select
              name="moeda"
              data-testid="currency-input"
              onChange={ this.handleChange }
            >
              <option value="USD">USD</option>
              <option value="CAD">CAD</option>
              <option value="EUR">EUR</option>
            </select>
          </label>
        </div>
        <div className="form">
          <label htmlFor="metodo">
            Método de pagamentos
            <select
              name="metodo"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
        </div>
        <div className="form">
          <label htmlFor="tipoDespesa">
            Tipo de despesa
            <select
              name="tipoDespesa"
              data-testid="tag-input"
              onChange={ this.handleChange }
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
          <button type="submit"> Adicionar Despesa </button>
        </div>
      </div>
    );
  }
}
// vou ter que fazer uma action para cada item deste form?
// fazer uma action pra atualizar a despesa no header?
// pegar pelo imput com função handlechange pra levar para o estado
// submeter tudo com o botão do clique, fazer uma função que envie pro estado.
// como colocar o retorno em um array? no reducer?

export default connect()(Form);
