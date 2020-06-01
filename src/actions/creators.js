import { SET_TRANSACTIONS, ADD_TRANSACTION } from './types';

const setTransactions = (transactions) => ({ type: SET_TRANSACTIONS, transactions});

const addTransaction = (transaction) => ({ type: ADD_TRANSACTION, transaction});

export {setTransactions, addTransaction};