import React from 'react';

import '../styles/transactions.css';
import AddTransaction from './add-transaction';

export default class Transactions extends React.Component {
    constructor() {
        super();

        this.state = {
            transactions: []
        };
    }

    componentDidMount() {
        fetch('/transactions').then(resp => {
            return resp.json();
        }).then(body => {
            this.setState({
                transactions: body
            })
        })
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
        
        const newTransaction = {id: this.state.transactions.length + 1, spent: spent, date: new Date().getDate() + '.' + new Date().getMonth() + '.' + (new Date().getFullYear() - 2000), category: category, amount: amount}

        fetch(`/transactions`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTransaction),
          })
          .then(e => e.json())

        this.setState({
            transactions: [...this.state.transactions, {id: this.state.transactions[0].id + 1, spent: spent, date: new Date().getDate() + '.' + new Date().getMonth() + '.' + (new Date().getFullYear() - 2000), category: category, amount: amount}]
        });


    }

    render() {
        const{ list } = this.props;

        return (
            <div>
                <AddTransaction onAdd={(a, b, c) => this.addNewTransaction(a, b, c)}></AddTransaction>
                <div class="transactions">
                    <p><b>Inflow:</b> ${this.calcInflow(this.state.transactions)}</p>
                    <p><b>Outflow:</b> ${this.calcOutflow(this.state.transactions)}</p>
                    <hr class="thick"></hr>
                    {this.state.transactions && this.state.transactions.map((transaction) => (
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