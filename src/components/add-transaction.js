import React from 'react';

import '../styles/add-transaction.css';

export default class AddTransaction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: '',
            amount: '',
            spent: true
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.onAdd(this.state.category, this.state.amount, this.state.spent);

        this.setState ({ 
            category: '',
            amount: '',
            spent: true
        })
    }

    handleCategoryChange(e) {
        this.setState({
            category: e.target.value
        });
    }

    handleAmountChange(e) {
        this.setState({
            amount: Number(e.target.value)
        });
    }

    handleSpentChange(e) {
        this.setState({
            spent: e.target.value == 'true'
        });
    }

    render() {
        return (
            <div class="add-transaction-component">
                <div class="add-transaction">Add Transaction</div>
                <form class="form-container" onSubmit={(e) => this.handleSubmit(e)}>
                    <div class="input-block">
                        <label for="category"><b>Category</b></label>
                        <input type="text" placeholder="Enter Category" name="category" value={this.state.category} onChange={(e) => this.handleCategoryChange(e)} required></input>
                    </div>
                    <div class="input-block">
                        <label for="amount"><b>Amount</b></label>
                        <input type="text" placeholder="Enter Amount" name="amount" value={this.state.amount} onChange={(e) => this.handleAmountChange(e)} required></input>
                    </div>
                    <div class="radios" onChange={(e) => this.handleSpentChange(e)}>
                        <div class="radio-block">
                            <input type="radio" id="earned" name="status" value="false" required></input>
                            <label for="earned">+</label>
                        </div>
                        <div class="radio-block">
                            <input type="radio" id="spent" name="status" value="true" required></input>
                            <label for="spent">-</label>
                        </div>
                    </div>
                    <button type="submit" class="btn">Add</button>
                </form>
            </div>
        )
    }
}