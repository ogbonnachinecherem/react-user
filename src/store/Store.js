import { legacy_createStore as createStore } from "redux";
import UsersReducer from "../reducers/UsersReducer";

let Store = createStore(UsersReducer)

export default Store;