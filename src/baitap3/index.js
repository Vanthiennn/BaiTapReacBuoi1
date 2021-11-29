import React from "react" ;
import Header from "./header";
import Carousel from "./carousel";
import Listproduct from "./list-product"
import Footer from "./footer";

export default function Baitap3() {
    return (
        <div className="bg-dark">
            <Header/>
            <Carousel/>
            <div className="container-fluid pt-5 pb-5">
                <Listproduct/>
            </div>
            <Footer/>
        </div>
    )
}