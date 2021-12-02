import React, { Component } from 'react';
import Example from './example';

export default class HandlingEvents extends Component {
    handlingEvents() {
        console.log("haha")
    }

    handlingEventsParam(username,age){
        console.log(username,age)
    }
    render() {
        return (
            <div>
                <h3>Handling Events</h3>
                <button className="btn btn-info" onClick={this.handlingEvents}>Handling Events</button>
                {/* Cách thứ hai khi có 1 dòng code  */}
                <button className="btn btn-success" onClick={()=>{console.log(456)}}>Text </button>
                {/* Khi có tham số (Param) */}
                <button className="btn btn-danger" onClick={()=>{this.handlingEventsParam("Cybersoft",18)}}>Text param</button>
                <hr/>

                <Example/>
            </div>
        )
    }
}
