import React from "react";
import Product from "./products";

export default function Listproduct() {
    return (
        <div>
            <h1 className="text-white text-center">BEST SMARTPHONE</h1>
            <div className="row">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            </div>
        </div>
        
    )
}