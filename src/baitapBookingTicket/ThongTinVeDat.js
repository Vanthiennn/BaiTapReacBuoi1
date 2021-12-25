import React, { Component } from 'react'
import {connect} from "react-redux"
import {actHuyGhe } from "../redux/action"

class ThongTinVeDat extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                <button className='gheDuocChon mr-2'></button><span className='text-light' style={{fontSize:"30px"}}>Ghế đã đặt</span>
                <br/>
                <button className='gheDangChon mr-2'></button><span className='text-light' style={{fontSize:"30px"}}>Ghế đang được chọn</span>
                <br/>
                <button className='ghe mr-2' style={{marginLeft:0}}></button><span className='text-light' style={{fontSize:"30px"}}>Ghế chưa được chọn</span>
                </div>
                <div className='mt-5'>
                    <table className="table" border="2">
                        <thead>
                            <tr className='text-light' style={{fontSize:"35px"}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-warning' style={{fontSize:"20px"}}>
                            {this.props.danhSachGheDangDat.map((ghe,index)=>{
                               return <tr  key={index}>
                               <th>{ghe.soGhe}</th>
                               <th>{ghe.gia}</th>
                               <th><button onClick={()=>{
                                   {this.props.dispatch(actHuyGhe(ghe.soGhe))}
                               }} className='text-danger'>Hủy</button></th>
                           </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            
        )
    }
}

const mapStateToProp = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}



export default connect(mapStateToProp) (ThongTinVeDat)