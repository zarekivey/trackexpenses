import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseListItem from './ExpenseListItem'

const ExpenseDashboardPage = () => (
    <div>
    <ExpenseListFilters />
        <ExpenseListItem />
       <ExpenseList />
    </div>
);

export default ExpenseDashboardPage; 