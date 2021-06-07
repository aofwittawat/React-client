/* eslint-disable no-lone-blocks */
import React, { Component } from 'react'
import Monitor from '../components/monitor/Monitor'
import axios from "axios"

export default class Home extends Component {

  constructor(props){
    super(props)

    this.state = {products:""}
  }

  componentDidMount(){
  //   this.setState({products:[
  //     { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/static/1.jpg" },
  //     { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/static/2.jpg" },
  //     { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/static/3.jpg" },
  //     { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/static/4.jpg" },
  //     { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/static/5.jpg" },
  //     { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/static/6.jpg" }
  // ]
  //   })
      // fetch("http://localhost:3001/products", {method: "GET"})
      //       .then(res => res.json())
      //       .then(res => {this.setState({products: res})})
    axios.get("http://localhost:3000/products").then(res => {
        console.log(res.data)
        {this.setState({products: res.data})}
    })
  }
  render() {
    return (
      <div>
        <Monitor products = {this.state.products} />
      </div>
    )
  }
}

