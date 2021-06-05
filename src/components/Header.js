import React, { Component } from 'react'

export class Header extends Component {

    constructor(props){
        super(props)

        this.state ={date: new Date()}
    
    }

    
    render() {

        const style = {height: 75, weight :100, padding: 10}
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 text-start">
                        <h1 className ="text-success"><img style={style} src="/static/logo-heathyfood.png" alt="" /> Healthy CAFE</h1>
                    </div>
                    <div className="col-sm-4 text-end">
                        <h5 className ="text-muted mt-1">{this.state.date.toLocaleTimeString()}</h5>
                    </div>
                </div>
            </div>
                <hr className ="mt-2 pt-0" />
            </>
        )
    }
}

export default Header

