import { createStore } from 'redux';

const INITIAL_STATE = {
    orders: [],
    ordersDone: [],
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "GET_ORDERS":
            return Object.assign({}, state, {
                orders: action.value.map((itemO, indexO) => {
                    return Object.assign({}, itemO, {
                        lista: itemO.lista.map((itemL,indexL) => {
                            return Object.assign({}, itemL, {
                                checked: false
                            })
                        })
                    }) 
                })
            });
            
        case "GET_ORDERS_DONE":
            return Object.assign({}, state, {
                ordersDone: action.value.map((itemO, indexO) => {
                    return Object.assign({}, itemO, {
                        lista: itemO.lista.map((itemL,indexL) => {
                            return Object.assign({}, itemL, {
                                checked: false
                            })
                        })
                    }) 
                })
            });
        case "SET_CHECKED":
            return Object.assign({}, state, {
                orders: state.orders.map((item, index) => {
                    if (index === action.orderi) {
                        return Object.assign({}, item, {
                            lista: action.lista
                          })
                    }
                    return item
                })
            });
        case "SET_CHECKED_DONE":
            return Object.assign({}, state, {
                ordersDone: state.ordersDone.map((item, index) => {
                    if (index === action.orderi) {
                        return Object.assign({}, item, {
                            lista: action.lista
                          })
                    }
                    return item
                })
            });
        // case "SET_DONE":
        //     return {
        //         if(action.status==="done"){

        //         } else {

        //         }
        //     }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;