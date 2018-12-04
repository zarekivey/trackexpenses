import React from 'react';
import { connect } from 'react-redux'; // This connects components to the store
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => ( // This gives us access to the props grabbed from the store
    <div>
        {
            props.expenses.length === 0 ? (
               <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
        )

        }
    </div>
);

const mapStateToProps = (state) => { // the state is the stores state
    return { // We grab what we want from the store
        expenses: selectExpenses(state.expenses, state.filters) // This is so that we get the filtered array
    };
};

export default connect(mapStateToProps)(ExpenseList); //This connects the two, the end result being the orginal component with the props from the store