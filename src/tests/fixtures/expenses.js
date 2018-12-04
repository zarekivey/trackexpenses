import moment from 'moment'

export default [{ // multiple expenses to filter 
    id: '1',
    description: 'gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf() // createdAt values are different so the times dont interfere with each other
}, {
    id: '3',
    description: 'credit card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf() // value of is to get the regular time stamp back 
}];
