import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Product from "../components/Product";
import LoadingItem from "../components/LoadingProduct";

import ScrollToTop from "../components/commonComponent/ScrollToTop";

import { getProducts as listProducts } from "../redux/actions/ProductActions";

function HomeScreen(props) {
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <section className={`cards`}>
            <div className="cards__wrapper">
                {
                    loading ?
                        <React.Fragment>
                            {[...Array(products.length).keys()].map((_, index) => (
                                <LoadingItem key={index} />
                            ))}
                        </React.Fragment>
                        : error ? <h2>{error}</h2>
                        : products.map((product) => (
                            <Product key={product._id} { ...product } productId={product._id}/>
                        ))
                }
            </div>
            <ScrollToTop />
        </section>
    );
}

export default HomeScreen;
