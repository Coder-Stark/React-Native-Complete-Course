import {ADD_TO_CART} from './constants'

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        data: item                                  //data == payload
    }
}