import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addProduct } from "../../redux/actions";
import ProductGrid from "./ProductGrid";

const AddProduct = () => {
    const dispatch = useDispatch();

    const [product, setProduct] = useState();
    const submitProduct = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value,
        });
    };

    const submit = (event) => {
        event.preventDefault();
        const uniqeId = { id: uuid() };
        const quantity = { cartQuantity: 0 };
        const addProductInfo = Object.assign(uniqeId, quantity, product);
        dispatch(addProduct(addProductInfo));
    };
    return (
        <div id="product">
            <main className="py-16">
                <div className="productWrapper">
                    <ProductGrid></ProductGrid>
                    <div>
                        <div className="formContainer">
                            <h4 className="formTitle">Add New Product</h4>
                            <form
                                onSubmit={submit}
                                className="space-y-4 text-[#534F4F]"
                                id="lws-addProductForm"
                            >
                                <div className="space-y-2">
                                    <label htmlFor="lws-inputName">
                                        Product Name
                                    </label>
                                    <input
                                        onChange={submitProduct}
                                        name="name"
                                        className="addProductInput"
                                        id="lws-inputName"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lws-inputCategory">
                                        Category
                                    </label>
                                    <input
                                        onChange={submitProduct}
                                        name="catagory"
                                        className="addProductInput"
                                        id="lws-inputCategory"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lws-inputImage">
                                        Image Url
                                    </label>
                                    <input
                                        onChange={submitProduct}
                                        name="url"
                                        className="addProductInput"
                                        id="lws-inputImage"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-8 pb-4">
                                    <div className="space-y-2">
                                        <label htmlFor="ws-inputPrice">
                                            Price
                                        </label>
                                        <input
                                            onChange={submitProduct}
                                            name="price"
                                            className="addProductInput"
                                            type="number"
                                            id="lws-inputPrice"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lws-inputQuantity">
                                            Quantity
                                        </label>
                                        <input
                                            onChange={submitProduct}
                                            name="stock"
                                            className="addProductInput"
                                            type="number"
                                            id="lws-inputQuantity"
                                            required
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    id="lws-inputSubmit"
                                    className="submit"
                                >
                                    Add Product
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddProduct;
