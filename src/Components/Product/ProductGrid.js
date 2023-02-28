import React from "react";
import { useSelector } from "react-redux";

const ProductGrid = () => {
    const products = useSelector((state) => state);

    return (
        <div>
            <div className="productContainer" id="lws-productContainer">
                {products.map((product) => (
                    <div key={product.id} className="lws-productCard">
                        <img
                            className="lws-productImage"
                            src={product.url}
                            alt="product"
                        />
                        <div className="p-4 space-y-2">
                            <h4 className="lws-productName">{product.name}</h4>
                            <p className="lws-productCategory">Tops</p>
                            <div className="flex items-center justify-between pb-2">
                                <p className="productPrice">
                                    BDT{" "}
                                    <span className="lws-price">
                                        {product.price}
                                    </span>
                                </p>
                                <p className="productQuantity">
                                    QTY{" "}
                                    <span className="lws-quantity">
                                        {product.quantity}
                                    </span>
                                </p>
                            </div>
                            <button className="lws-btnAddToCart">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
