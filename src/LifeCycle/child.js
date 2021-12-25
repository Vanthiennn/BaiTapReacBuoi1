import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberChild:5,
            username:"Cybersoft",
        };
        this.interval = null ;
    }

    // componentWillReceiveProps(nextProps){
    //     console.log("componentWillReceiveProps",nextProps)
    // }

    static getDerivedStateFromProps(nextProps, currentState){
        console.log("getDerivedStateFromProps",nextProps, currentState)
        if(nextProps.number === currentState.numberChild){
            // Cập nhật lại state "username"
            return {
                username:"Thien"
            }
        }
        return null
    }


    componentDidMount() {
        this.interval = setInterval(()=>{
            console.log("hello")
        },1000)
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
        clearInterval(this.interval)
    }

   

    render() {
        return (
            <div>
                <h3>Child</h3>
                <p>UserName:{this.state.username} - NumberChild:{this.state.numberChild}
                </p>
            </div>
        )
    }
}
