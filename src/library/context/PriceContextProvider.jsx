"use client"
import React,{useState,useContext} from "react";
import PriceContext from "./PriceContext";

const PriceContextProvider=({children})=>{
    const [totalPrice,setTotalPrice]=useState(0);
    const [webPrice,setWebPrice]=useState(0);
    const [mobilePrice,setMobilePrice]=useState(0);

    return (
        <PriceContext.Provider value={{totalPrice,webPrice,mobilePrice,setTotalPrice,setWebPrice,setMobilePrice}}>
            {children}
        </PriceContext.Provider>
    )

}

export default PriceContextProvider;