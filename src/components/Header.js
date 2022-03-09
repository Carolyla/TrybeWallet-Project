import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    console.log(this.props);

    const total = expenses.reduce(
      (accumulator, element) => accumulator + (element
        .value * element.exchangeRates[element.currency].ask),
      0,
    );

    console.log(total);
    return (
      <>
        <div className="header-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1936/1936039.png"
            alt="imagem-carteira-digital"
            width={ 80 }
          />
        </div>
        <div className="header-form">
          <h3 data-testid="email-field">
            Email:
            {' '}
            {email}
          </h3>
          <h3 data-testid="total-field">
            Despesas :
            {' '}
            {total.toFixed(2)}
          </h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});
Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};
export default connect(mapStateToProps)(Header);
