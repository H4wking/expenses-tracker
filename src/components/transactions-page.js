import React from 'react';
import AddTransaction from './add-transaction';
import Transactions from './transactions';

export default class TransactionsPage extends React.Component {
    render() {
        return (
            <div>
                <AddTransaction></AddTransaction>
                <Transactions></Transactions>
            </div>
        )
    }
}