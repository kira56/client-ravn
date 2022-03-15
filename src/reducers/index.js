import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { rolReducer } from "./rols.reducer";
import { uiReducer } from "./ui.reducer";
import { categoryReducer } from "./category.reducer";


const reducers = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    rol: rolReducer,
    category: categoryReducer
});

export default reducers;