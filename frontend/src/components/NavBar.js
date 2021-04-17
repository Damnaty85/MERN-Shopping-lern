import React from 'react';
import { useSelector } from "react-redux";
import { CartOutline } from "react-ionicons/lib"
import { Link } from "react-router-dom";

const navLinks = [
    {
        title: 'Главная',
        path: '/'
    },{
        title: 'Каталог',
        path: '/'
    }, {
        title: 'Контакты',
        path: '/contacts'
    }
];

function NavBar() {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    };

    return (
        <nav className={`header-inner__wrapper`}>
            <ul>
                {
                    navLinks.map((link, index) => (
                        <li key={index}><Link to={link.path}>{link.title}</Link></li>
                    ))
                }
                <li>
                    <Link to={`/cart`} className={`cart-link`}>
                        <CartOutline />
                        Cart
                        <span className={`cart-link__badge`}>{getCartCount()}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
