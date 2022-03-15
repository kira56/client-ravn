import { types } from "@types/index";

const initialState = {
    rols: null
}

export const rolReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ROLS:
            return {
                ...state,
                rols: action.payload
            }
        default:
            return state;
    }
}