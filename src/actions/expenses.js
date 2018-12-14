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
    id // it accepts the items id, this function gets used in the reducer
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
});
