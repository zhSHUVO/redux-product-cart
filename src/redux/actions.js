import {
    ADDPRODUCT,
    ADDTOCART,
    DECREASECARTQUANTITY,
    DELETECARTPRODUCT,
    INCREASECARTQUANTITY,
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
        type: ADDTOCART,
        payload: id,
    };
};

export const increaseCartQuantity = (id) => {
    return {
        type: INCREASECARTQUANTITY,
        payload: id,
    };
};
export const decreaseCartQuantity = (id) => {
    return {
        type: DECREASECARTQUANTITY,
        payload: id,
    };
};

export const deleteCartProduct = (id) => {
    return {
        type: DELETECARTPRODUCT,
        payload: id,
    };
};
