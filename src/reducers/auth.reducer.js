import { types } from "@types/index";
import Cookies from "js-cookie"

const initialState = {
    token: Cookies.get('token'),
    isAuthenticated: false,
    user: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
        case types.SIGNUP:
            Cookies.set('token', action.payload)
            return {
                ...state,
                isAuthenticated: true,
            }
        case types.USER_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            }
        case types.LOGOUT:
            Cookies.remove('token')
            return {
                token: null,
                user: null,
                isAuthenticated: false
            }
        default:
            return state;
    }
}