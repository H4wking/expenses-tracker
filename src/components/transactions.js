import React from 'react';

import '../styles/transactions.css';
import AddTransaction from './add-transaction';
import { connect } from 'react-redux';

import { setTransactions, addTransaction } from '../actions/creators';
import { fetchTransactions } from '../actions';

class Transactions extends React.Component {
    state = {
        transactions: [],
    };


    componentDidMount() {
        this.props.fetchTransactions()
    }

    calcInflow(transactions) {
        var inflow = 0;
        for (var transaction of transactions) {
            if (!transaction.spent) {
                inflow += transaction.amount
            }
        }
        return inflow
    }

    calcOutflow(transactions) {
        var outflow = 0;
        for (var transaction of transactions) {
            if (transaction.spent) {
                outflow += transaction.amount
            }
        }
        return outflow
    }

    addNewTransaction(category, amount, spent) {
        const newTransaction = {
            id: this.props.transactions.length + 1,
            spent: spent,
            date: new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + (new Date().getFullYear() - 2000),
            category: category,
            amount: amount
        }

        fetch(`/transactions`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTransaction),
          })
          .then(e => e.json())
          .then(transactions => {
              this.props.addTransaction(newTransaction)
          })
    }

    render() {
        const{ list } = this.props;

        return (
            <div>
                <AddTransaction onAdd={(a, b, c) => this.addNewTransaction(a, b, c)}></AddTransaction>
                <div class="transactions">
                    <p><b>Inflow:</b> ${this.calcInflow(this.props.transactions)}</p>
                    <p><b>Outflow:</b> ${this.calcOutflow(this.props.transactions)}</p>
                    <hr class="thick"></hr>
                    {this.props.transactions && this.props.transactions.reverse().map((transaction) => (
                        <div>
                            <div class="date">{transaction.date}</div>
                            <div class="category">{transaction.category}</div>
                            <div class="amount">{transaction.spent ? '-' : '+'}${transaction.amount}</div>
                            <hr></hr>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    transactions: state.transactions
});

const mapDispatchToProps = (dispatch) => ({
    setTransactions: (transactions) => dispatch(setTransactions(transactions)),
    addTransaction: (transaction) => dispatch(addTransaction(transaction)),
    fetchTransactions: () => dispatch(fetchTransactions())
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions)