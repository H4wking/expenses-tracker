import { setTransactions } from './creators';

export const fetchTransactions = () => (dispatch) => {
    fetch('/transactions').then(resp => {
        return resp.json();
    }).then(body => {
        dispatch(setTransactions(body));
    })
}
