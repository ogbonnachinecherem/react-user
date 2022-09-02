import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import UsersReducer from "../reducers/UsersReducer";

let Store = createStore(UsersReducer, applyMiddleware(thunk))

export default Store;