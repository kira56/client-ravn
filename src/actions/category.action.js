import clientAxios from "@config/axios";
import { types } from "@types/index";
import Swal from 'sweetalert2'

export const createCategory = (data) => {
    return async (dispatch) => {
        try {
            const result = await clientAxios.post('/api/category', data);
            dispatch({
                type: types.ADD_CATEGORY,
                payload: result.data.category
            })

            Swal.fire(
                'Nice Job',
                'Category add successfully',
                'success'

            )
        } catch (error) {
            console.log(error)
            setTimeout(() => {
                dispatch({
                    type: types.UI_REMOVE_ERROR,
                })
            }, 5000);
            dispatch({
                type: types.UI_SET_ERROR,
                payload: error
            })
        }
    }
}

export const findCategories = (page, size) => {
    return async (dispatch) => {
        try {
            const result = await clientAxios.get('/api/category', {
                params: { page, size }
            });
            dispatch({
                type: types.FIND_CATEGORIES,
                payload: result.data.result.categories
            })

        } catch (error) {
            console.log(error);
            Swal.fire(
                '404',
                'Problem to get categories',
                'danger'
            )
        }
    }
}

export const getCategory = (category) => {
    return (dispatch) => {
        dispatch({
            type: types.GET_CATEGORY,
            payload: category
        })
    }
}

export const editCategory = (category) => {
    return async (dispatch) => {
        try {
            const result = await clientAxios.put(`/api/category/${category.id}`, category);

            dispatch({
                type: types.EDIT_CATEGORY,
                payload: result.data.category
            })
            Swal.fire(
                'Nice Job',
                'Category edit successfully',
                'success'

            )
            
        } catch (error) {
            dispatch({
                type: types.UI_SET_ERROR,
                payload: error.response
            })
        }
    }
}
