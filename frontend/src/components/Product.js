import React, { useState } from 'react';
import LazyImage from "./commonComponent/LazyImage";
import Button from "./commonComponent/Button";
import {Link} from "react-router-dom";
import {addToCart} from "../redux/actions/CartActions";
import {useDispatch} from "react-redux";
import { EyeOutline } from "react-ionicons/lib"

function Product({image, price, sizes, currency, name, votes, productId }) {
    const dispatch = useDispatch();
    const [activeSize, setActiveSize] = useState('');
    const [isSelected, setIsSelected] = useState(false);

    const onSelectSize = (size) => {
        setActiveSize(size);
        setIsSelected(true);
    };

    const addToCartHandler = () => {
        dispatch(addToCart(productId, 1, activeSize));
    };

    return (
        <div className="cards-item">
            <div className="cards-item__top">
                <LazyImage src={image} alt={name}/>
                <div className="cards-item__buying">
                    <span className="cards-item__size">
                        {
                            sizes.map((size) => (
                                <span
                                    onClick={() => onSelectSize(size)}
                                    className={activeSize === size ? `selected` : ''}
                                    key={size}>{size}</span>
                            ))
                        }
                    </span>
                    <Button onClick={addToCartHandler} className={!isSelected && `disabled`} title={'Выберите размер'}>
                        Add to Cart
                    </Button>
                </div>
                <Link to={`/products/${productId}`} className={`_fast-view`}><EyeOutline /><span>Смотреть</span></Link>
            </div>
            <div className="cards-item__bottom">
                <p>{name} <span className="cards-item__price">{price} {currency}</span></p>
                <span className="cards-item__rating">Рейтинг: {((votes + 31.25) / (5 + 10)).toFixed(1)}</span>
            </div>
        </div>
    );
}

export default Product;
