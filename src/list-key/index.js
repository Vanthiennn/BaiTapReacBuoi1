import React, { Component } from 'react'

export default class ListKey extends Component {
    constructor(props){
        super(props)
        this.state = {
            listUser : [
            { username:"Thien", age: 18},
            { username:"Th", age: 10},
            { username:"Ten", age: 15},
            ]
        }
    }


    renderListUser = () => {
        return this.state.listUser.map((user,index)=>{
            return(
                <li key={index}>
                    username:{user.username} - age:{user.age}
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>ListKey</h3>
                <ul>
                    {this.renderListUser()}
                    {/* {this.state.listUser.map((user,index)=>{
                         return (
                         <li key={index}>username:{user.username}- age:{user.age}
                         </li>
                         )
                    })} */}
                </ul>
            </div>
        )
    }
}
