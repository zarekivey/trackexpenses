import { createStore } from 'redux'

const incremenCount = ({ incrementBy = 1 } = {}) => ({ // The default object is necessary for error control 
    type: 'INCREMENT',
    incrementBy
}); // This is an action generator

const decrememntCount = ({ decrememntBy = 1 } = {}) => ({ // The first argument is destructuring the object that gets passed in, if no object is, then start it off as an empty object
    type: 'DECREMENT',
    decrememntBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
})

// REDUCERS
// 1. Are pure functions, meaning the output is only determined by the input
// 2. Never change state or action directly, dont assign or mutate them.
// 3. Mutates the redux stores states `

const countReducers = (state = { count: 0 }, action) => { // state == current state, default state gets defined here
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrememntBy
            }
        case 'RESET': {
            return {
                count: 0
            }
        }
        default:
            return state;
    } // This is a redux state container
}

const store = createStore (countReducers); // The store takes in the reducers 

const undsubscribe = store.subscribe(() => { // The function passed inside gets called evrytime the store changes
    console.log(store.getState());
})

// store.dispatch({ // This is a redux call to the store dispatching an action
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incremenCount({ incrementBy: 5 }));

store.dispatch(incremenCount());

store.dispatch(resetCount());

store.dispatch(decrememntCount());

store.dispatch(decrememntCount({decrememntBy: 10 }));

store.dispatch(setCount({ count: 101 }));