import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'; // univerally unique id

//ADD_EXPENSE  ACTION GENERATOR
const addExpense = ( 
    {   
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({ 
    type:'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ( { id } = {} ) => ({ // This accepts an id, if there is none it returns an empty array
    type: 'REMOVE_EXPENSE',
    id // it accepts the items id, this function gets used in the reducer
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
});

// SET_TEXT_FILTER
const setTextFilter = ( text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate // this is passed into the action so it can be used in the reducer
});

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})


//EXPENSES REDUCER
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id); // this returns a new array. if the function returns true, the item is kept and vice versa, id = expense
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, // grabs every value from the expense objects
                        ...action.updates // this means to override every value that was changed
                    }
                } else {
                    return expense; // This means make no changes
                };
            });
        default:
            return state;
    }
};

// FILTERS REDUCER

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = ( state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state, // spreading out the old state and adding on the new e
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortByAmount
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortByDate
            }
        case 'SET_START_DATE':
            return {
                ...state, // speading out the old array
                startDate: action.startDate // overriding the old value
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate 
            }
        default:
            return state;
    }
}

// Get visible expenses,  This filters the data
const getVisibileExpenses = (expenses, { text, sortBy, startDate, endDate, amount }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expenses.createdAt >= startDate; //  only want to filter if startDate is a number
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()); // This is for text that includes what was inputed, and is case sensitive

        return startDateMatch && endDateMatch && textMatch; // if all of these are true it will be a visible expense
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1; // 1 means b will come first, if not -1 - a will come first
        }
    });
};

// STORE CREATION

const store = createStore(
    combineReducers({ // combines reducers, takes a key value pair. key = the root state name and then its reducer
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState(); // get the entire state, all of the arrays
    const visibleExpenses = getVisibileExpenses(state.expenses, state.filters); //  grabbing the return value of getVisibleExpenses
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent, amount: 100', createdAt: -21000})); // This is dispatching an action
const expenseTwo = store.dispatch(addExpense({ description: 'Cofee, amount: 300', createdAt: -1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
    expenses: [{
        id: 'deded',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // or date
        startDate: undefined,
        endDate: undefined
    }
};