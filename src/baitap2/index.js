import React from "react" ;
import Header from "./header";
import Carousel from "./carousel";
import Whatwedo from "./whatwedo";
import Listcard from "./list-card";
import Footer from "./footer";
import Contact from "./contact";


export default function Baitap2() {
    return (
        <div>
            <Header/>
            <Carousel/>
            <div className="container">
                <div className="row">
                    <Whatwedo/>
                    <Contact/>
                </div> 

                <Listcard/>
            </div>         
            <Footer/>
        </div>

    )
}