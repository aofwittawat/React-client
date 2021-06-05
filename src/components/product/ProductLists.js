import React, { Component } from 'react'
import ProductItems from './ProductItems'

export default class ProductLists extends Component {

    showProduct(){
        
             return this.props.products &&  this.props.products.map(product => (
                    <ProductItems {...product}/>
            ))
        
    }
    render() {
        return (
            <div className="row">
                    {this.showProduct()}       
            </div>
        )
    }
}
