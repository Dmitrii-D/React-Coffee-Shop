import React, {Component} from 'react';
import MainPage from '../mainPage/';
import OurCoffee from '../ourCoffee';
import YourPleasure from '../yourPleasure';
import Footer from '../footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ItemDetails from '../itemDetails/itemDetails';
// import CoffeeItem from '../coffeeItem';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='app'>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/ourcoffee" exact component={OurCoffee}/>
                    <Route path="/yourpleasure" component={YourPleasure}/>
                    <Route path="/ourcoffee/:id" component = {ItemDetails}/>
                    <Footer />
                </div>
            </Router>
        )
    }
}