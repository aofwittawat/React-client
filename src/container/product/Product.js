import axios from 'axios'
import React, { Component } from 'react'
import ProductLists from '../../components/product/ProductLists'

export default class Product extends Component {

    constructor(props){
        super(props)

        this.state={ products : null}
        this.delProduct = this.delProduct.bind(this)
        
    }

    componentDidMount(){
        axios.get("http://localhost:3000/products").then(response =>{
            this.setState({ products: response.data })
        })
    }

    delProduct(product) {
        console.log(product);
		axios.delete("http://localhost:3000/products/" + product.product).then(response => {
			axios.get("http://localhost:3000/products").then(response => {
				this.setState({products  : response.data});
			});
		});
	}


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h1>สินค้า</h1>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-success title float-end">เพิ่ม</button>
                    </div>
                </div>
                <ProductLists  products={this.state.products}
                    onDelProduct={this.delProduct}
                />
            </div>
        )
    }
}
