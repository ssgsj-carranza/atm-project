import {createdStore} from 'redux';
import { bankingReducer } from './reducers/bankingReducer';

export const store = createdStore(bankingReducer)