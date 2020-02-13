import { createStore } from 'redux';

const INITIAL_STATE = {
    
}


function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;