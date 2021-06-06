import React, { Component } from 'react'
import ProductItems from './ProductItems'

export default class ProductLists extends Component {

    showProduct(){
        
            // นำ products ที่ส่งค่าทาง props มา show
             return this.props.products &&  this.props.products.map(product => (
                    <ProductItems key = {product.productId}  product = {product} onAddOrder={this.props.onAddOrder}/>
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
