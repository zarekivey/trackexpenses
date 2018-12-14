import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => { // defualt state / value 
    const state = expensesReducer(undefined, {type: '@INIT'})
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id // grabbing the individual id to remove
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]) // expect an array that doesnt contain the item we removed
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1' // an id that doesnt exist
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses) // the array that doesnt contain that false id
})

test('should add an expense', () => {
    const expense = { // remember that you can insert objects and items into your test cases !!!!
        id: '109', 
        description: 'Laptop',
        note: '',
        createdAt: 20000,
        amount: 29500
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

test('should edit an expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: { // the piece of data we want to test 
            amount
        }
    };
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if expense not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: { // the piece of data we want to test 
            amount
        }
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
})