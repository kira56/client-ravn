import clientAxios from "@config/axios";
import tokenAuth from "@config/token";
import { types } from "@types/index";
import Cookies from "js-cookie"

export const signup = (data) => {
    return async (dispatch) => {
        try {
            const result = await clientAxios.post('/api/signup', data)
            dispatch({
                type: types.SIGNUP,
                payload: result.data.token
            });
            dispatch(userAuthenticated())
        } catch (error) {
            console.log(error.response.data)
            setTimeout(() => {
                dispatch({
                    type: types.UI_REMOVE_ERROR,
                })
            }, 5000);
            dispatch({
                type: types.UI_SET_ERROR,
                payload: error.response.data
            })
        }
    }
}

export const userAuthenticated = () => {
    return async (dispatch) => {
        try {
            const token = Cookies.get('token');
            if (token) {
                tokenAuth(token)
            }

            const result = await clientAxios.get('/api/authenticated');

            dispatch({
                type: types.USER_AUTHENTICATED,
                payload: result.data.user
            })


        } catch (error) {
            console.log(error.response);
            dispatch({
                type: types.UI_SET_ERROR,
                payload: error.response
            })
        }
    }
}

export const signin = (data) => {
    return async (dispatch) => {
        try {

            const result = await clientAxios.post('/api/signin', data);

            dispatch({
                type: types.LOGIN,
                payload: result.data.token
            })

            dispatch(userAuthenticated())

        } catch (error) {
            console.log(error.response.data)
            setTimeout(() => {
                dispatch({
                    type: types.UI_REMOVE_ERROR,
                })
            }, 5000);
            dispatch({
                type: types.UI_SET_ERROR,
                payload: error.response.data
            })
        }
    }
};

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: types.LOGOUT
        })
    }
}