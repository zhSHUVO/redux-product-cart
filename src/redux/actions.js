import {
    ADDPRODUCT,
    ADDTOCART,
    DELETECARTPRODUCT,
    REMOVEFROMCART,
} from "./actionTypes";

export const addProduct = (product) => {
    return {
        type: ADDPRODUCT,
        payload: product,
    };
};

export const addToCart = (id) => {
    return {
        type: ADDTOCART,
        payload: id,
    };
};

export const removeFromCart = (id) => {
    return {
        type: REMOVEFROMCART,
        payload: id,
    };
};

export const deleteCartProduct = (id) => {
    return {
        type: DELETECARTPRODUCT,
        payload: id,
    };
};
