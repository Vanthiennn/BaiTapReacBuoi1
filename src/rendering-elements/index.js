import React, { Component } from 'react'

export default class RenderingElements extends Component {
    username = "Cybersoft"; 
    age = 18 ;
    name = "Thiên";

    renderInfo(){
        return(
            <>
                <p>{this.username} - {this.age} - {this.name}</p>
            </>
        )
    }

    render() {
        return (
            <div>
                <h3>*RenderingElements</h3>
                {this.renderInfo()}
            </div>
        )
    }
}
