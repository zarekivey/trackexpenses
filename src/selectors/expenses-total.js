export default (expenses) => {
    return expenses
    // Getting the amounts from the arrays
    .map((expense) => expense.amount) 
    // Reducing them down to a single number
    .reduce((sum, value) => sum + value, 0) 
};