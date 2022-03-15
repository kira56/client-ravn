import clientAxios from "@config/axios";
import { types } from "@types/index";


export const allRols = () => {
    return async (dispatch) => {
        try {

            const result = await clientAxios.get('/api/rol');
            dispatch({
                type: types.GET_ROLS,
                payload: result.data.rols
            })

        } catch (error) {
            console.log(error)
            dispatch({
                type:types.UI_SET_ERROR,
                payload:error
            });

        }
    }
}