import { types } from "@types/index";

const initialState = {
    categories: [],
    category: null
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FIND_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case types.ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case types.GET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case types.EDIT_CATEGORY:
            return {
                ...state,
                category: null,
                categories: state.categories.map(category => category.id === action.payload.id ? category = action.payload : category)
            }
        default:
            return state;
    }
}