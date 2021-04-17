import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './SideDrawer.css'

function SideDrawer({show, click}) {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const sideDrawerClass = ['side-drawer'];

    if (show) {
        sideDrawerClass.push('show');
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    };

    return (
        <div className={sideDrawerClass.join(' ')}>
            <ul className={`side-drawer__links`} onClick={click}>
                <li>
                    <Link to={`/cart`}>
                        <ion-icon name="cart"></ion-icon>
                        <span>
                            Cart
                            <span className={`side-drawer__cart-badge`}>{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to={`/`}>
                        Back
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SideDrawer;
