import { ActionTypes } from '../constants/action-types'

// set Product Actions

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

// selected Product Actions

export const selectedProducts = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products
    }
}

// remove Products Actions

export const removeProducts = (products) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
        payload: products
    }
}