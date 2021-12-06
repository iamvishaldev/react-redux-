import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [
        {
            id: 0,
            name: 'lalit',
            category: 'Developer'
        },
        {
            id: 1,
            name: 'lalit',
            category: 'Developer'
        },
    ]
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state
    }
}