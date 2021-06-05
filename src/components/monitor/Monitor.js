import React, { Component } from 'react'
import ProductLists from '../product/ProductLists'
import Calculator from './Calculator'

export default class Monitor extends Component {


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <ProductLists products = {this.props.products} />
                    </div>
                    <div className="col-md-3">
                        <Calculator />
                    </div>
                </div>
            </div>
        )
    }
}
