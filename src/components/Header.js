import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import image from '../images/trybewallet.jpg';

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
      <div className="header-form">
        <div className="container-logo">
          <img src={ image } alt="logo trybe wallet" className="img-logo" />
          <h3>TrybeWallet</h3>
        </div>
        <div>
          <h5 data-testid="email-field">
            Email:
            {' '}
            {email}
          </h5>
          <p data-testid="total-field">
            Despesas:
            {' '}
            {total.toFixed(2)}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </div>
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
