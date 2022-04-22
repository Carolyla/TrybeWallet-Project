import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';
import { buttonDelete } from '../actions';

class Table extends Component {
  handleClick = ({ target: { id } }) => {
    console.log('clicou');
    const { dispatch } = this.props;

    dispatch(buttonDelete(id));
  };

  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <div className="background-wallet">
        <table border="1" width="100%">
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
          <tbody>
            {expenses.map((element) => (
              <tr key={ element.id }>
                <td>{element.description}</td>
                <td>{element.tag}</td>
                <td>{element.method}</td>
                <td>{(+element.value).toFixed(2)}</td>
                <td>
                  {element.exchangeRates[element.currency].name.split('/')[0]}
                </td>
                <td>
                  {(+element.exchangeRates[element.currency].ask).toFixed(2)}
                </td>
                <td>
                  {(
                    +element.value
                      * element.exchangeRates[element.currency].ask
                  ).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <Button
                    label="Editar"
                    name="editar"
                    handleClick={ this.handleClick }
                    id={ element.id }
                  />
                  <Button
                    label="Excluir"
                    name="excluir"
                    dataTestId="delete-btn"
                    handleClick={ this.handleClick }
                    id={ element.id }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf().isRequired,
};
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Table);
