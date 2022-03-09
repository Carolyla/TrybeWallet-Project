// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  SEND_FORM,
  GET_COINS,
  REQUEST_API,
  FAILED_COINS,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: '',

};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_FORM:
    return {
      ...state,
      expenses: [...state.expenses, action.state],
    };
  case REQUEST_API:
    return { ...state, isLoading: true };
  case GET_COINS:
    return { ...state,
      currencies: action.payload,
      isLoading: false };
  case FAILED_COINS:
    return { ...state, error: action.payload, isLoading: false };

  default:
    return state;
  }
};
export default wallet;
