import {
    ADDPRODUCT,
    ADDTOCART,
    DELETECARTPRODUCT,
    REMOVEFROMCART,
} from "./actionTypes";

const initialState = [];

const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            return [...state, action.payload];

        case ADDTOCART:
            return state.map((product) => {
                if (product.id !== action.payload) {
                    return product;
                }
                return {
                    ...product,
                    cartQuantity: product.cartQuantity + 1,
                    stock: product.stock - 1,
                };
            });
        case REMOVEFROMCART:
            return state.map((product) => {
                if (product.id !== action.payload) {
                    return product;
                }
                return {
                    ...product,
                    cartQuantity: product.cartQuantity - 1,
                    stock: product.stock + 1,
                };
            });
        case DELETECARTPRODUCT:
            return state.map((product) => {
                if (product.id !== action.payload) {
                    return product;
                }
                return {
                    ...product,
                    cartQuantity: 0,
                    stock: product.stock + product.cartQuantity,
                };
            });

        default:
            return state;
    }
};

export default shoppingReducer;
