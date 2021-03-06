import React, { Component } from 'react'

export default class ProductItems extends Component {

      

    

    render() {
        const {productName, unitPrice, thumbnail} = this.props.product
        return (
            
            <div className="col-md-4 col-sm-6">
                <img  className="img-fuild img-thumbnail" src={thumbnail} alt={productName} />
                <h5 className="mt-2">{productName}</h5>
                <p className="text-end title ">{unitPrice} THB</p>
                
               { this.props.onAddOrder &&
               <button type ="button" className="btn btn-block btn-secondary title" onClick ={()=> this.props.onAddOrder(this.props.product)}>
                    ซื้อ
                </button>
                }

                
               { (this.props.onDelProduct || this.props.onEditProduct ) &&
               <button type ="button" className="btn  btn-info col-5 title">
                    แก้ไข
                </button>
                }

                { (this.props.onDelProduct || this.props.onEditProduct ) &&
                <button type ="button" className="btn  btn-danger col-5 float-end title" onClick ={()=> this.props.onDelProduct(this.props.product)}>
                    ลบ
                </button>
                }



                <hr />
            </div>
            
        )
    }
}
