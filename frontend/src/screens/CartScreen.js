import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import OrderForm from "../components/OrderForm";
import Button from "../components/commonComponent/Button";

import { addToCart, removeFromCart } from "../redux/actions/CartActions";

function CartScreen(props) {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    useEffect(() => {}, []);

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    };

    const removeHandler = (id) => {
        dispatch(removeFromCart(id))
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    };

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => item.price * item.qty + price, 0)
    };

    return (
        <div className={'basket'}>
            <h2>Корзина</h2>
            <div className="basket__wrapper">
                <div className="basket__left">
                    <div className="basket__table-header">
                        <p>Товар</p>
                        <p>Цена</p>
                        <p>Кол-во</p>
                        <p>Итого</p>
                    </div>
                    {
                        cartItems.length === 0
                            ? (<div>Your cart is empty. <Link to={'/'}>Go Back</Link></div>)
                            : cartItems.map((item) => (
                                <CartItem
                                    key={item.productId}
                                    item={item}
                                    qtyChangeHandler={qtyChangeHandler}
                                    removeHandler={removeHandler}
                                />
                            ))
                    }
                </div>

                <div className="basket__right">
                    <div className="basket__right _top">
                        <div className="basket__info">
                            <p>Subtotal ({getCartCount()}) items</p>
                            <p>{getCartSubTotal().toFixed(2)} {cartItems[0].currency}</p>
                        </div>
                        <Button>Proceed To Checkout</Button>
                    </div>
                    <div className="basket__right _bottom">
                        <OrderForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartScreen;
