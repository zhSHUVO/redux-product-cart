import React from "react";
import { useDispatch } from "react-redux";
import {
    addToCart,
    deleteCartProduct,
    removeFromCart,
} from "../../redux/actions";

const CartProdut = ({ cartProduts }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="space-y-6">
                {cartProduts.map((cartProdut) => (
                    <div key={cartProdut.id} className="cartCard">
                        <div className="flex items-center col-span-6 space-x-6">
                            <img
                                className="lws-cartImage"
                                src={cartProdut.url}
                                alt="product"
                            />
                            <div className="space-y-2">
                                <h4 className="lws-cartName">
                                    {cartProdut.name}
                                </h4>
                                <p className="lws-cartCategory">
                                    {cartProdut.catagory}
                                </p>
                                <p>
                                    BDT{" "}
                                    <span className="lws-cartPrice">
                                        {cartProdut.price}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                            <div className="flex items-center space-x-4">
                                <button
                                    className="lws-incrementQuantity"
                                    disabled={!cartProdut.stock}
                                    onClick={() =>
                                        dispatch(addToCart(cartProdut.id))
                                    }
                                >
                                    <i className="text-lg fa-solid fa-plus"></i>
                                </button>
                                <span className="lws-cartQuantity">
                                    {cartProdut.cartQuantity}
                                </span>
                                <button
                                    className="lws-decrementQuantity"
                                    onClick={() =>
                                        dispatch(removeFromCart(cartProdut.id))
                                    }
                                >
                                    <i className="text-lg fa-solid fa-minus"></i>
                                </button>
                            </div>
                            <p className="text-lg font-bold">
                                BDT{" "}
                                <span className="lws-calculatedPrice">
                                    {cartProdut.cartQuantity * cartProdut.price}
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                            <button
                                className="lws-removeFromCart"
                                onClick={() =>
                                    dispatch(deleteCartProduct(cartProdut.id))
                                }
                            >
                                <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartProdut;
