import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import LazyImage from "../components/commonComponent/LazyImage";
import Button from "../components/commonComponent/Button";

import {getProductDetails} from "../redux/actions/ProductActions";
import {addToCart} from "../redux/actions/CartActions";
import {Remove, Add} from "react-ionicons/lib"

function ProductScreen({match, history}) {
    const mainImage = useRef();
    const dispatch = useDispatch();

    const [qty, setQty] = useState(1);
    const [isInCart, setIsInCart] = useState(false);
    const [activeSize, setActiveSize] = useState('');
    const [isSelected, setIsSelected] = useState(false);

    const productDetails = useSelector(state => state.getProductDetails);
    const {loading, error, product} = productDetails;

    const checkInCart = (id) => {
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        cartItems.forEach((item) => {
            item.productId === id && setIsInCart(true);
        })
    };

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, product, match]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty, activeSize));
        // history.push("/cart");
        checkInCart(product._id);
    };

    const changeImage = (evt) => {
        const imageUrl = evt.target.src;
        mainImage.current.querySelector('IMG').setAttribute('src', imageUrl);
    };

    const onSelectSize = (size) => {
        setActiveSize(size);
        setIsSelected(true);
    };

    const minusesItemHandler = () => {
        setQty(qty - 1);
    };

    const plusesItemHandler = () => {
        setQty(qty + 1)
    };

    return (
        <div className="product-screen">
            {
                loading ? <h2>Loading...</h2>
                    : error ? <h2>{error}</h2> :
                    <React.Fragment>
                        <div className="product-screen__left">
                            {
                                product.moreImage &&
                                <div className={"product-screen__gallery"}>
                                    <div className={"product-screen__thumbs"}>
                                        {product.moreImage.map((it) => (
                                            <LazyImage src={it} key={it} onMouseEnter={changeImage}/>
                                        ))
                                        }
                                    </div>
                                    <div className={"product-screen__image"} ref={mainImage}>
                                        {product.moreImage[0] &&
                                        <LazyImage src={product.moreImage[0]} alt={product.name}/>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="product-screen__right">
                            <div className="product-screen__detail-info">
                                <div className="product-screen__top">
                                    <h3>{product.name}</h3>
                                    <div className="product-screen__rating">
                                        Рейтинг: {((product.votes + 31.25) / (5 + 10)).toFixed(1)}
                                    </div>
                                </div>
                                <div className="product-screen__description">
                                    <ul>
                                        <p>Описание: </p>
                                        {
                                            product.properties &&
                                            Object.values(product.properties).map((prop, index) => (
                                                <li key={index}><b>{prop.name}</b>{prop.value}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="product-screen__pre-order">
                                <span className="cards-item__size">
                                {
                                    product.sizes &&
                                    product.sizes.map((size) => (
                                        <span key={size}
                                              onClick={() => onSelectSize(size)}
                                              className={activeSize === size ? `selected` : ''}
                                        >{size}</span>
                                    ))
                                }
                            </span>
                                    <p>Цена:<span>{product.price * qty} {product.currency}</span></p>
                                </div>
                                <div className="product-screen__order">
                                    <div className="product-screen__quantity">
                                        <Button
                                            onClick={() => minusesItemHandler()}
                                            className={qty === 1 ? `disabled` : ``}><Remove /></Button>
                                        <b>{qty}  шт.</b>
                                        <Button
                                            onClick={() => plusesItemHandler()}
                                            className={qty >= product.countInStock ? `disabled` : ``}><Add /></Button>
                                    </div>
                                    <Button
                                        onClick={addToCartHandler}
                                        className={!isSelected && `disabled`} title={'Выберите размер'}>
                                        {isInCart ? `Уже в корзине` : `Добавить в покупки`}
                                    </Button>
                                </div>
                            </div>
                            <div className="product-screen__shipping">
                                <h3>Бесплатная доставка</h3>
                                <p>Бесплатная стандартная доставка для заказов свыше 40 000 RUB.</p>
                            </div>
                        </div>
                    </React.Fragment>
            }
        </div>
    );
}

export default ProductScreen;
