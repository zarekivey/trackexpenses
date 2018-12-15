import uuid from 'uuid'
import database from '../firebase/firebase'

//ADD_EXPENSE  ACTION GENERATOR
// passing the type and expense through
export const addExpense = (expense) => ({ 
    type:'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        // Getting the data
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0    
        } = expenseData
        const expense = { description, note, amount, createdAt}

        // Saving the expense object to firebase with the firebase id 
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense   
            }));
        });
    };
};

//REMOVE_EXPENSE
export const removeExpense = ( { id } = {} ) => ({ // This accepts an id, if there is none it returns an empty array
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
});

// SET_EXPENSES - Grab expense data from firebase, put it into array
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));
        });
    };
}
