import React from 'react';

export default class AddTransaction extends React.Component {
    render() {
        return (
            <div class="add-transaction-component">
                <div class="add-transaction">Add Transaction</div>
                <form class="form-container">
                    <div class="input-block">
                        <label for="category"><b>Category</b></label>
                        <input type="text" placeholder="Enter Category" name="category" required></input>
                    </div>
                    <div class="input-block">
                        <label for="amount"><b>Amount</b></label>
                        <input type="text" placeholder="Enter Amount" name="amount" required></input>
                    </div>
                    <button type="submit" class="btn">Add</button>
                </form>
            </div>
        )
    }
}
