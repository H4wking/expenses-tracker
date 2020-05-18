import React from 'react';

import '../styles/transactions.css'

export default class Transactions extends React.Component {
    constructor() {
        super();

        this.state = {
            inflow: 1000,
            outflow: 500,
            transactions: [
                {
                    id: 1,
                    spent: true,
                    date: "01.01.20",
                    category: "Food",
                    amount: 100,
                },
                {
                    id: 2,
                    spent: false,
                    date: "02.01.20",
                    category: "Salary",
                    amount: 1000,
                },
                {
                    id: 3,
                    spent: true,
                    date: "03.01.20",
                    category: "Car",
                    amount: 350,
                }
            ]
        };
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
        var inflow = 0;
        for (var transaction of transactions) {
            if (transaction.spent) {
                inflow += transaction.amount
            }
        }
        return inflow
    }

    render() {
        return (
            <div class="transactions">
                <p><b>Inflow:</b> ${this.calcInflow(this.state.transactions)}</p>
                <p><b>Outflow:</b> ${this.calcOutflow(this.state.transactions)}</p>
                <hr class="thick"></hr>
                {this.state.transactions.map((transaction) => (
                    <div>
                        <div class="date">{transaction.date}</div>
                        <div class="category">{transaction.category}</div>
                        <div class="amount">{transaction.spent ? '-' : '+'}${transaction.amount}</div>
                        <hr></hr>
                    </div>
                ))}
            </div>
        )
    }
}