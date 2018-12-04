import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: 'abc123' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })
})

test('should setupo edit expense action object', () => {
    const action = editExpense( 'lala', { note: 'new note' })
    expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'lala',
    updates: { 
        note: 'new note'
    }
    });
});

test('should setup add expense aciton object with provided value', () => {
    const expenseData = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData, // taking in all of the expense data (id amount etx)
            id: expect.any(String) // This allows us to expect/ take in any id string
        }
    })
})

test('should setup add expense aciton object with default value', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    })
})