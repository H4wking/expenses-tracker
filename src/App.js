import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/navbar';
import Transactions from './components/transactions';
import AddTransaction from './components/add-transaction';
import TransactionsPage from './components/transactions-page';
import ReportPage from './components/report-page';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route path='/report' component={ReportPage} />
          <Route path='/' component={TransactionsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
