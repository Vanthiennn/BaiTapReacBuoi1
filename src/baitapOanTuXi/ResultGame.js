import React, { Component } from 'react'
import {connect} from "react-redux"


class ResultGame extends Component {
    render() {
        return (
            <div>
                <div className='display-4 text-warning' >{this.props.ketQua}</div>
                <div className='display-4 text-success mt-3'> Số lần thắng <span className='text-warning'>{this.props.soLanThang}</span></div>
                <div className='display-4 text-success mt-3'>Tổng số lần chơi: <span className='text-warning'>{this.props.soLanChoi}</span></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ketQua:state.BaiTapOanTuXiReducer.ketQua,
        soLanThang:state.BaiTapOanTuXiReducer.soLanThang,
        soLanChoi:state.BaiTapOanTuXiReducer.soLanChoi,
    }
}

export default connect(mapStateToProps,null) (ResultGame)