const redux = require('redux');

// the reducer function receives the old or existing state and the dispatch action 
const counterReducer = (state = { counter: 0 }, action) => {
    // if the action was increment i wanna return this below 
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    // otherwise if a different action was dispatched, I wanna return the unchanged state 
    return state;

};

const store = redux.createStore(counterReducer);
// console.log(store.getState());

const counterSubscriber = () => {
    // this will give us the latest state snapshot after it was changed 
    const latestState = store.getState();
    console.log(latestState);
}

// we make redux aware of the subscriber function 
//and tell it that it should be executed whenver the sate changes 
store.subscribe(counterSubscriber);

// this causes the reducer func to run again and then increases the counter
store.dispatch({ type: 'increment'})
store.dispatch({ type: 'decrement'})


