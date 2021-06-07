/* eslint-disable no-lone-blocks */
import React, { Component } from 'react'
import { BrowserRouter, Route , Switch } from 'react-router-dom'
import Home from './container/Home'
import About from './container/About'
import Order from './container/order/Order'
import Product from './container/product/Product'


export default class App extends Component {

  renderRouter() {
    return(
      <Switch>
        <Route  path ="/" exact component= {Home}/>
        <Route  path ="/about" exact component= {About}/>
        <Route  path ="/orders" exact component= {Order}/>
        <Route  path ="/products" exact component= {Product}/>
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    )
  }
}

