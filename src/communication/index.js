import React, { Component } from 'react'
import Child from './child';
import ChildFunction from './ChildFunction';
import ChildrenComponent from './children';
export default class Communication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "Cybersoft",
            age:4,
        }
    }

    handlechangeInfo =() =>{
        this.setState({
            username : "Thiên",
            age:18,
        })
       
    }

    reset = (username,age) => {
        // hàm reset có nhiệm vụ nhận lại data từ component child
        this.setState({
            username,
            age,
        })
    }

    render() { 
        const {username,age} = this.state ;
        return (
            <div>
                <h3>Communication</h3>
                <p> 
                    Username: {username} - Age: {age}
                </p>
                <button className="btn btn-success" onClick={this.handlechangeInfo}>Change Info</button>
                <hr/>
                <Child username={username} age={age} resetInfo={this.reset} />
                <hr/>
                <ChildFunction username={username} age={age} />
                <hr/>
                <ChildrenComponent>
                    <p>Username: {username} - Age:{age}</p>
                    <div>Thien</div>
                    <h3>Hello</h3>
                </ChildrenComponent>
            </div>
        )
    }
}
