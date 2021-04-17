import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Button from "./commonComponent/Button";
import DropDown from "./commonComponent/DropDown";
import {Add, Remove} from "react-ionicons/lib";

function CartItem({ item, qtyChangeHandler, removeHandler }) {
    const [qty, setQty] = useState(item.qty);

    const minusesItemHandler = () => {
        setQty(qty - 1);
    };

    const plusesItemHandler = () => {
        setQty(qty + 1);
    };

    return (
        <div className="basket-item">
            <div className="basket-item__image">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="basket-item__info">
                <Link  className="basket-item__name" to={`/products/${item.productId}`}>{item.name}</Link>
                {
                    <DropDown activeOption={item.activeSize} listOptions={item.sizes}/>
                }
                <span className="basket-item__delete" onClick={() => removeHandler(item.productId)}>Удалить</span>
            </div>
            <p className="basket-item__price">{item.price} {item.currency}</p>
            <div className="basket-item__quantity">
                <Button
                    onClick={() => minusesItemHandler()}
                    className={qty === 1 ? `disabled` : ``}><Remove /></Button>
                <b>{qty}  шт.</b>
                <Button
                    onClick={() => plusesItemHandler()}
                    className={qty >= item.countInStock ? `disabled` : ``}><Add /></Button>
            </div>
            <p className="basket-item__total">{item.price * qty} {item.currency}</p>
        </div>
    );
}

export default CartItem;
