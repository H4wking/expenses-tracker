import React from 'react';

export default class AddTransaction extends React.Component {
    render() {
        return (
            <div class="add-transaction">
                <form class="form-container">
                    <h1>Add Transaction</h1>
                    <label for="category"><b>Category</b></label>
                    <input type="text" placeholder="Enter Category" name="category" required></input>

                    <label for="amount"><b>Amount</b></label>
                    <input type="text" placeholder="Enter Amount" name="amount" required></input>
                    <button type="submit" class="btn">Add</button>
                </form>
            </div>
        )
    }
}
