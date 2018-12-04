import moment from 'moment';

// FILTERS REDUCER

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default ( state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state, // spreading out the old state and adding on the new e
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
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