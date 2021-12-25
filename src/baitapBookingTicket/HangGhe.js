import React, { Component } from 'react'
import {connect} from "react-redux"
import { actDatGhe } from "./../redux/action"

class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe,index)=>{
            let cssGheDaDat = "";
            let disabled = false;
           
            // Trạng thái ghế đã có người đặt
            if(ghe.daDat) {
                 cssGheDaDat = "gheDuocChon";
                 disabled = true
            }

            // Trạng thái ghế đang được lựa chọn
            let cssGheDangDat = ""
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
            if(indexGheDangDat !== -1) {
                cssGheDangDat = "gheDangChon"
            }
            return <button onClick={()=>{
                {this.props.gheDangDat(ghe)}
            }} disabled={disabled} key={index} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}>
                {ghe.soGhe}
            </button>
        })
    }

    rendersoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe,index)=>{
            return <button className='rowNumber'>{ghe.soGhe}</button>
        })
    }

    renderHangGhe = () => {
        if(this.props.soHangGhe === 0) {
            return <div className='ml-4'>
                {this.props.hangGhe.hang}
                {this.rendersoHang()}
            </div>
        } else {
            return <div>
                {this.props.hangGhe.hang}
                {this.renderGhe()}
            </div>
        }
        
    }

    render() {
        return (
            <div className='text-light ml-5 mt-2 text-left' style={{fontSize:"30px"}}>
               {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat:state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        gheDangDat: (ghe) => {
            dispatch(actDatGhe(ghe))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (HangGhe)
