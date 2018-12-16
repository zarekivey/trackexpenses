import { connect } from 'react-redux';
import React from 'react'
import { Link } from 'react-router-dom';
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{expenseCount} {expenseWord}</span> totalling <span>{formattedExpensesTotal}</span></h1>
            <div classNAme="page-header_actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div> 
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary)