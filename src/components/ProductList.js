import React from 'react'
import Product from './Product';

export default function ProductList({productList, incrementQuantity, decrementQuantity, removeItem}) {
  // console.log("from Productlist.js , ", productList);
  return (
    productList.length > 0 ? (
    productList.map((product, i) =>{
      return( 
      <Product 
        product ={product} 
        key = {i}
        index = {i} 
        incrementQuantity = {incrementQuantity} 
        decrementQuantity= {decrementQuantity} 
        removeItem = {removeItem}
        />
      );
    })
    )
  
    : (
    <h2>No item left in cart. Refresh</h2>
  )
  )
  
}
