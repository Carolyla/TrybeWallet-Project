import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    console.log(this.props);
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
            {0}
          </h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});
Header.propTypes = {
  email: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Header);
