import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/navbar';
import Transactions from './components/transactions';
import AddTransaction from './components/add-transaction';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Transactions></Transactions>
      {/* <AddTransaction></AddTransaction> */}
    </div>
  );
}

export default App;
