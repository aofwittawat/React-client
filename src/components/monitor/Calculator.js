import React, { Component } from 'react'

export default class Calculator extends Component {
    render() {
        return (
            <div>
                <h1 className="text-end"> 340.00</h1>
                <hr />
                <ul className="list-unstyled">
                    <li className="text-end text-success title">
                        บึงชู x 1 = 200
                        <button className="btn btn-light btn-sm"></button>
                    </li>
                    <li className="text-end text-success title">
                        บึงชู x 1 = 200
                        <button className="btn btn-light btn-sm"></button>
                    </li> 
                </ul>
                <hr />
                <button className="btn btn-lg m-3 btn-danger title">ยืนยัน</button>
                <button className="btn btn-lg m-3 btn-secondary title">ยกเลิก</button>
            </div>
        )
    }
}
