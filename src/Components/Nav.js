import React from "react";
import logo from "../images/logo.png";

const Nav = () => {
    const toggleCart = (event) => {
        event.preventDefault();
        const product = document.getElementById("product");
        const cart = document.getElementById("cart");
        product.style.display = "none";
        cart.style.display = "block";
    };
    const toggleHome = (event) => {
        event.preventDefault();
        const product = document.getElementById("product");
        const cart = document.getElementById("cart");
        product.style.display = "block";
        cart.style.display = "none";
    };
    return (
        <div>
            <nav className="bg-[#171C2A] py-4">
                <div className="navBar">
                    <a href="index.html">
                        <img src={logo} alt="LWS" className="max-w-[140px]" />
                    </a>

                    <div className="flex gap-4">
                        <a
                            href="#home"
                            onClick={toggleHome}
                            className="navHome"
                            id="lws-home"
                        >
                            {" "}
                            Home{" "}
                        </a>
                        <a
                            href="cart.html"
                            onClick={toggleCart}
                            className="navCart"
                            id="lws-cart"
                        >
                            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                            <span id="lws-totalCart">0</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
