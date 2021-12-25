import React, { Component } from 'react';
import {connect} from "react-redux"

class Computer extends Component {
    render() {
        let keyfarme = `@keyframes randomItem${Date.now()} {
            0 {top: -50px;}
            25% {top: 0px;}
            50% {top:-50;}
            100% {top:0}
          }`
        return (
            <div className="playerGame">
                <style>
                    {keyfarme}
                </style>
            <div className='thinking' style={{position:"relative"}}>
            <img  style={{width:90,height:90,
                transform:"rotate(180deg)",
                position:"absolute",
                animation:`randomItem${Date.now()}2s`,
                left:"30%"}}
                src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh}/>
            </div>
            <div className='speech-bubble'></div>
            <img style={{width:150,height:150}}  src='./img/BaiTapOanTuXi/playerComputer.png' alt='./img/BaiTapOanTuXi/playerComputer.png'/>
            
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer:state.BaiTapOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps,null) (Computer)
