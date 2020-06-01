import {SET_TRANSACTIONS, ADD_TRANSACTION} from '../actions/types';

export default function trasactions(state, action) {
    switch(action.type) {
        case SET_TRANSACTIONS:
            return { ...state, transactions: action.transactions };

        case ADD_TRANSACTION:
            return {...state, transactions: [...state.transactions, action.transaction]};

        default:
            return state;
    }
}