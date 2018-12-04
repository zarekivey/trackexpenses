import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore(); // This gives us access to all of the stores methods
 
store.dispatch(addExpense({ description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 109500})); 

const state = store.getState();
const visibleExpenses =  getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = ( // provider takes 1 prop, your apps store that you want to provide to the components
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));