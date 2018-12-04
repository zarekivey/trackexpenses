import uuid from 'uuid'

//ADD_EXPENSE  ACTION GENERATOR
export const addExpense = ( 
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
