import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <table border="1">
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {expenses.map((element) => (
          <tbody key={ element.id }>
            <td>{element.description}</td>
            <td>{element.tag}</td>
            <td>{element.method}</td>
            <td>{(+element.value).toFixed(2)}</td>
            <td>
              {element.exchangeRates[element.currency].name.split('/')[0]}
            </td>
            <td>
              {(+element.exchangeRates[element.currency].ask)
                .toFixed(2) }

            </td>
            <td>
              {(+element.value * element.exchangeRates[element.currency].ask)
                .toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button className="edit-btn" type="submit" data-testid="edit-btn">
                Editar
              </button>
              <button
                className="delete-btn"
                type="submit"
                data-testid="delete-btn"
              >
                Excluir
              </button>
            </td>
          </tbody>
        ))}
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
};
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Table);
