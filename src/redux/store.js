import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { shoppingReducer } from "./reducer";

const store = createStore(shoppingReducer, composeWithDevTools());

export default store;
