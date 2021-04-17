import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer"
import {HomeScreen, ProductScreen, CartScreen} from './screens'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import "./styles/main.scss"

function App() {

    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Switch>
                        <Route exact path={`/`} component={HomeScreen}/>
                        <Route exact path={`/products/:id`} component={ProductScreen}/>
                        <Route exact path={`/cart`} component={CartScreen}/>
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
