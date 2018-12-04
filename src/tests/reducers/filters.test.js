import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'}); // we want to test the default state + the first action object is @@INIT
    expect(state).toEqual({ // equals the default state
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortby to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount');
}) // just making sure the type is set to amount, very simnple

test(' should set sortBy to date', () => {
    const currrentState = { //  the state before the reducers is called
        text: '',
        startDate: undefined,
        endDate: undefined, // this and the two above are default
        sortBy: 'amount' // this is set to amount so we can see it change
    };
    const action = { type: 'SORT_BY_DATE'}; // the type of action thats going to be getting dispatched
    const state = filtersReducer(currrentState, action); //  new state after action 
    expect(state.sortBy).toBe('date');
}) 

test('should set text filter', () => {
    const text = 'some filter'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe(text) //  its a good idea to split the string and the object into their own variables
})

test('should set startDate filter', () => {
    const startDate = moment();
    const action  = { // setting the changed state onto an action object
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})

test('should set endDate filter', () => {
    const endDate = moment();
    const action  = { // setting the changed state onto an action object
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})
