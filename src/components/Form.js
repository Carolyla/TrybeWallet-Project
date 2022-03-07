import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <>
        <div className="form">
          <h1> Form </h1>
          <label htmlFor="valorDespesa">
            {' '}
            Valor Despesas:
            <input
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
              type="text"
              name="descriçãoDespesas"
              data-testid="description-input"
              placeholder="Descrição da Despesa"
            />
          </label>
        </div>
        <div className="form">
          <label htmlFor="Moeda">
            Moeda
            <select name="Moeda" data-testid="currency-input">
              <option value="USD">USD</option>
              <option value="CAD">CAD</option>
              <option value="EUR">EUR</option>
            </select>
          </label>
        </div>
        <div className="form">
          <label htmlFor="metodo">
            Método de pagamentos
            <select name="metodo" data-testid="method-input">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
        </div>
        <div className="form">
          <label htmlFor="tipoDespesa">
            Tipo de despesa
            <select name="tipoDespesa" data-testid="tag-input">
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
      </>
    );
  }
}

export default Form;
