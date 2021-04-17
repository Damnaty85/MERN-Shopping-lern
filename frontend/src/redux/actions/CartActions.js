import * as actionTypes from "../constants/CartConstants";
import axios from "axios";

export const addToCart = (id, qty, activeSize, inCart) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            productId: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            sizes: data.sizes,
            currency: data.currency,
            countInStock: data.countInStock,
            qty,
            activeSize
        },
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
