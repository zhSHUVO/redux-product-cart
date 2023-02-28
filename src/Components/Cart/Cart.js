import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "./BillDetails";
import CartProdut from "./CartProdut";

const Cart = () => {
    const products = useSelector((state) => state);
    const cartProduts = products.filter((product) => {
        return product.cartQuantity > 0;
    });

    return (
        <div id="cart">
            <main className="py-16">
                <div className="container 2xl:px-8 px-2 mx-auto">
                    <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                    <div className="cartListContainer">
                        <CartProdut cartProduts={cartProduts}></CartProdut>
                        <BillDetails cartProduts={cartProduts}></BillDetails>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Cart;
