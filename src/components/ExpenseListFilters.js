import React from 'react'
import {connect } from 'react-redux';
import { DateRangePicker } from  'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = { 
        calendarFocused: null, 
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate); // Changing the old v to the new one
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused })); // setting the state to the new value
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value); // This puts the targeted value through the setTextFilter function
    }
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    };
    render() {
        return ( // the props from the connect, this gives us acces to info from the store, the text values
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true} // to clear the dates
                    numberOfMonths={1} //  the amount fo dates shown 
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters // This gives us accces to props.filters.text
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});
  

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);