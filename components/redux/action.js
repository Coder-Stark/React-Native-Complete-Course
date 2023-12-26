import {ADD_TO_CART, REMOVE_FROM_CART, USER_LIST} from './constants'

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        data: item                                  //data == payload
    }
}
export const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        data: item                                  //data == payload
    }
}
export const getUserList = (item) => {
    return {
        type: USER_LIST,
        data: item                                  //data == payload
    }
}