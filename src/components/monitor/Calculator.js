import React, { Component } from 'react'

export default class Calculator extends Component {

    showOrders(orders){
        if(!orders || orders.length === 0 ){
                return <li className ="text-end title text-muted">ไม่มีสินค้าค่ะ</li>
        }else{
            return orders.map(order => {
                return ( <li className="text-end text-success title">
                                {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                                <button className="btn btn-light btn-sm">X</button>
                        </li>)
            })
        }
    }


    render() {

        const {totalPrice, orders} = this.props;
        return (
            <div>
                <h1 className="text-end">{totalPrice}</h1>
                <hr />
                <ul className="list-unstyled">
                  {this.showOrders(orders)}
                </ul>
                <hr />
                <button className="btn btn-lg btn-block mb-1 btn-danger title">ยืนยัน</button>
                <button className="btn btn-lg btn-block btn-secondary title">ยกเลิก</button>
            </div>
        )
    }
}
