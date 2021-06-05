import React, { Component } from 'react'

export default class ProductItems extends Component {

    render() {
        const {productName, unitPrice, thumbnail} = this.props
        return (
            <div className="col-md-2 col-sm-6">
                <img  className="img-fuild img-thumbnail" src={thumbnail} alt={productName} />
                <h5 className="mt-2">{productName}</h5>
                <p className="text-end title ">{unitPrice}</p>
                <button className="btn btn-block btn-secondary title">
                    ซื้อ
                </button>
            </div>
        )
    }
}
