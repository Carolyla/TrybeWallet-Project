import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { id, type, name, label, handleClick, dataTestId } = this.props;
    return (
      <button
        id={ id }
        type={ type ? 'button' : 'button' }
        name={ name }
        onClick={ handleClick }
        data-testid={ dataTestId }
      >
        {label}
      </button>
    );
  }
}
Button.defaultProps = {
  type: 'button',
  dataTestId: '',
};

Button.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};
// Requisito 8 feito com ajuda do Tonn
