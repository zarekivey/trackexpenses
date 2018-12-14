//EXPENSES REDUCER
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
            case 'SET_EXPENSES':
                return action.expenses;
        default:
            return state;
    }
};

