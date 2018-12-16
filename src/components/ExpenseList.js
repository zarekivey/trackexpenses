import React from 'react';
import { connect } from 'react-redux'; // This connects components to the store
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => ( // This gives us access to the props grabbed from the store
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
        {
            props.expenses.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No Expenses</span>
                </div>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
        )

        }
        </div>
    </div>
);

const mapStateToProps = (state) => { // the state is the stores state
    return { // We grab what we want from the store
        expenses: selectExpenses(state.expenses, state.filters) // This is so that we get the filtered array
    };
};

export default connect(mapStateToProps)(ExpenseList); //This connects the two, the end result being the orginal component with the props from the store