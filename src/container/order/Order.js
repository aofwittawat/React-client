import axios from 'axios'
import React, { Component } from 'react'

export default class Order extends Component {


    constructor(props){
        super(props)

        this.state = {orders: null}
    }

    componentDidMount() {
		axios.get("http://localhost:3000/orders").then(response => {
			// console.log(response.data);
            this.setState({orders:response.data})
            // console.log(this.state);
		});

       
    }

    delOrder(order) {
        axios.delete("http://localhost:3000/orders/" + order.id).then(response => {
            axios.get("http://localhost:3000/orders").then(response => {
                this.setState({orders: response.data});
            });
        });
    }
    showOrders() {
        return this.state.orders && this.state.orders.map(order => {
            // console.log(order.id);
            const date = new Date(order.orderedDate);
            return (
                <div key = {order.id} className="col-md-3">
                    <hr />
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}>X</button>
                    </p>
                    <h5>
                        วันที่ {date.toLocaleDateString() + ' ' + date.toLocaleTimeString()} 
                    </h5>
                    <ul >
                        {order.orders && order.orders.map(record => 
                        <li key={record.product.productId} >{record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity}
                        </li>
                        
                    )}
                    </ul>
                    <p className="title">ยอดรวม {order.totalPrice}</p>
                </div>
            )
        })
    }
    render() {
        return (
            <div className ="container-fluid">
                <h1>รายการสั่งซื้อ</h1>
                <div className="row">
                  {this.showOrders()}
                </div>    
            </div>
        )
    }
}

