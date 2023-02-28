import { ADDPRODUCT } from "./actionTypes";

const initialState = [];

const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            console.log(state);
            return [...state, action.payload];

        default:
            return state;
    }
};

export default shoppingReducer;
