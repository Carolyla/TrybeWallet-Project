import { combineReduceres } from 'redux';
import user from './user';
import wallet from './wallet';

const rootReducer = combineReduceres({ user, wallet });
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
export default rootReducer;
