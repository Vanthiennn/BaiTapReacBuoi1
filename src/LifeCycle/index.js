import React, { Component } from 'react'
import PureChild from './pure-child';
import Child from "./child"
export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        console.log("constructor - chạy 1 lần duy nhất")
        this.state = {
            number:0,
            statusChild:true,
        }
    }

    componentWillMount(){
        console.log("componentWillMount - chạy 1 lần duy nhất")
    }

    componentDidMount() {
         console.log("componentDidMout - chạy 1 lần duy nhất")   
         // call api 
    }

    componentWillUpdate(){
        console.log("componentWillUpdate")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate",nextProps, nextState)
        if(nextState.number === 2 ) {
            return false
        }
        return true;
    }

    render() {
        console.log("render")
        return (
            <div>
                <h3>LifeCycle</h3>
                <h1>Number:{this.state.number}</h1>
                <button className='btn btn-success' onClick={()=>{
                    this.setState({
                        number:this.state.number + 1
                    });
                }}>Click</button>
                <hr/>
                <PureChild/>
                <hr/>
                {this.state.statusChild && <Child number={this.state.number}/>}
                <button className='btn btn-info' onClick={()=>{
                    this.setState({
                        statusChild:false,
                    })
                }}>Change Status Child</button>
            </div>
        )
    }
}
