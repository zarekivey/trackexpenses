import moment from 'moment'
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    }) 
})

test('should sort by amount'), () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
}

test('should sort by date'), () => {
   expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'})
}

test('should generate set text filter object with text value', () => {
    const action = setTextFilter('text')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'text'
    })
})

test('should set text filter with default value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '',
    });
});
