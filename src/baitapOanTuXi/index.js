import React, { Component } from 'react';
import  "./assets/index.css";
import Player from './Player';
import Computer from './Computer';
import ResultGame from './ResultGame';
import {connect} from "react-redux"
class GameOanTuXi extends Component {
    render() {

       

        return (
            <div className='gameOanTuXi '>
                
                <div className='row text-center mt-5'>
                    <div className='col-4 mt-2'>
                        <Player/>
                    </div>
                    <div className='col-4 mt-2'>
                        <ResultGame/>
                        <button onClick={()=>{
                            this.props.playGame()
                        }} className='btn btn-success p-4 display-4 mt-5'>Play Game</button>
                    </div>
                    <div className='col-4 mt-2'>
                        <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        playGame: () => {
            let count = 0 ;

            let randomComputerItem = setInterval(()=>{
                dispatch({
                    type:"RAN_DOM"
                })
                count++;
                if(count > 15) {
                    clearInterval(randomComputerItem)
                    dispatch({
                        type:"RESULT_GAME"
                    })
                }
            },100)
        }
    }
}

export default  connect(null,mapDispatchToProps) (GameOanTuXi)
