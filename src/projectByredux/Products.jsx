import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getproducts } from "./productSlice";

export default function Product(){
  let products = useSelector((state)=>state.product.products);
  let dispatch = useDispatch();
  useEffect(()=>{
    const url = "https://dummyjson.com/products";
    dispatch(getproducts(url))
    console.log(products);
  },[])
  return (<>
    <h1>Product</h1>
  </>)
};