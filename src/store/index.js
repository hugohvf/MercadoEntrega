import { createStore } from 'redux';
import orders from '../pages/orders';

const INITIAL_STATE = {
    orders: [],
    ordersDone: [],
    position: {},
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
        case "SET_DONE":
            if(action.status==="undone"){
                return Object.assign({}, state, {
                    orders: state.orders.filter((item) => item._id !== action.pedido._id),
                    ordersDone: [...state.ordersDone,{...action.pedido, done: true}]
                })
            } else {
                return Object.assign({}, state, {
                    ordersDone: state.ordersDone.filter((item) => item._id !== action.pedido._id),
                    orders: [...state.orders,{...action.pedido, done: false}]
                })
            }
        case "SET_REGION":
            return Object.assign({}, state, {
                position: action.value,
            })
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;