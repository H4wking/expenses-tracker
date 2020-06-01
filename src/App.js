import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/navbar';
import Transactions from './components/transactions';
import AddTransaction from './components/add-transaction';
import TransactionsPage from './components/transactions-page';
import ReportPage from './components/report-page';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import configStore from './store';

const store = configStore();

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            <Route path='/report' component={ReportPage} />
            <Route path='/' component={Transactions} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
