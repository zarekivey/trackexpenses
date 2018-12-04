// Get visible expenses,  This filters the data
import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate, amount }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true; // if the startdate is the same or before the created moment by the day, if not then we dont want to filter out that way
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()); // This is for text that includes what was inputed, and is case sensitive

        return startDateMatch && endDateMatch && textMatch; // if all of these are true it will be a visible expense
    }).sort((a, b) => { 
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1; // 1 means b will come first, if not -1 - a will come first
        }
    }); 
};