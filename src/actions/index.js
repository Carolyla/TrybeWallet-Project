export const SEND_EMAIL = 'SEND_EMAIL';
export const REQUEST_API = 'REQUEST_API';
export const GET_COINS = 'GET_COINS';
export const FAILED_COINS = 'FAILED_COINS';
export const SEND_FORM = 'SEND_FORM';
const API = 'https://economia.awesomeapi.com.br/json/all';

// --- ENVIA E-MAIL AO HEADER---

export const sendEmail = (email) => ({
  type: 'SEND_EMAIL',
  email,
});

// ---ATUALIZA AS DESPESAS NO ESTADO GLOBAL---

export const sendForm = (state) => ({
  type: 'SEND_FORM',
  state,
});

// ----REQUISIÇÃO API----
const requestApi = () => ({
  type: 'REQUEST_API',
});

const getCoins = (json) => ({
  type: 'GET_COINS',
  payload: Object.keys(json),
});

const faliledRequest = (error) => ({
  type: 'FAILED_COINS',
  payload: error,
});

export function fetchCoin() {
  return (dispatch) => {
    dispatch(requestApi());
    return fetch(API)
      .then((response) => response.json())
      .then((json) => dispatch(getCoins(json)))
      .catch((error) => dispatch(faliledRequest(error)));
  };
}
export default sendEmail;
