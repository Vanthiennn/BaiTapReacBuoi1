import React, { Component } from "react";
import Header from './header';
import Content from './content';
import SideBar from './sidebar';
import Footer from "./footer";

class Baitap1 extends Component {
    render(){
        return (
            <div>
                <div>Baitap1</div>
                <Header/>
                <div className="contents">
                    <Content/>
                    <SideBar/>
                </div>
                <Footer/>
            </div>
                
        )
    }
}

export default Baitap1