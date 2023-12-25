import {ADD_TO_CART, REMOVE_FROM_CART} from './constants'

const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.data];   //(...state) the spread syntax is often used to create a new array or object while maintaining the original state's immutability. 
        case REMOVE_FROM_CART:
            let result = state.filter((item) => {
                return item.name != action.data;
            })
            return [...result];
        default:
            return state;
    }
} 