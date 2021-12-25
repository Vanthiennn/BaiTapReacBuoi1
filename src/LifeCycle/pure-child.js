import React, {  PureComponent } from 'react'

export default class PureChild extends PureComponent{
    render() {
        console.log("render PureChild")
        return (
            <div>
                <h3>PureChild</h3>
            </div>
        )
    }
}
