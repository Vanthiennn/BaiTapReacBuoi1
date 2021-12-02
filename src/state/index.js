import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "Cybersoft" ,
            isLogin : false ,
        }
    }

    

    handleLogin = () =>  {
        // hàm setState bị bất đồng bộ nên , tham số thứ 2 là callback function (xem consoloe.log ở trong callback function)
        this.setState({
            isLogin : true ,
        },
        ()=>{
            console.log(this.state.isLogin)
        })

    }
    handleLogout = () =>{
        this.setState({
            isLogin : false,
        })
    }

    renderHTML(){
        // dk ? "mệnh đề đúng" : "mệnh đề sai"
        return this.state.isLogin ? (
        <div>
            <h1>Hello {this.state.username}</h1>
            <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
        </div>
        ) : (
        <div>
            <h1>Vui lòng Login</h1>
            <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
        </div>)
    }

    render() {
        return (
            <div>
                <h3>State</h3>
                {this.renderHTML()}
            </div>
        )
    }
}
