import React, { Component } from 'react';
import ThongTinVeDat from "./ThongTinVeDat";
import HangGhe from "./HangGhe";
import "./bookingtickets.css";
import danhSachGheData from "./danhSachGhe.json";
export default class BookingTickets extends Component {

    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe,index)=>{
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
            </div>
        })
    }

    render() {
        return (
            <div className='bookingMovie' style={{position:"fixed",width:"100%",height:"100%" ,backgroundImage:"url('./img/BaiTapBookingTickets/bgmovie.jpg')",backgroundSize:"100%"}}>
                <div style={{position:"fixed",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.7)"}}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8 text-center'>
                                <div className='text-warning display-4'>Đặt vé xem phim tại Cyberlearn.vn</div>
                                <div className='mt-5 text-light' style={{fontSize:"25px"}}>Màn hình</div>
                                <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                                    <div className='screen'></div>
                                    {this.renderHangGhe()}
                                </div>
                                
                            </div>
                            <div className='col-4'>
                                <div style={{fontSize:"35px"}} className='text-light display-4 mt-2'>Danh sách ghé đã đặt</div>
                                <ThongTinVeDat/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
