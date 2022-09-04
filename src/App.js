
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import React, {useState} from 'react';
import Additem from "./components/Additem";


function App() {
  const productList = [
    {
      price:49999,
      name:"iphone 8",
      quantity:0,
    },
    {
      price:8999,
      name:"redmi 8",
      quantity:0,
    }
  ];

  let [product_List, setProductList] = useState(productList);
  let [totalAmount, settotalAmount] = useState(0);
  let [countTotalItem, setTotalItem] = useState(productList.length);
  const incrementQuantity = (index)=>{
    let newproductList = [...product_List];
    let newTotalAmount = totalAmount;
    newproductList[index].quantity++;
    newTotalAmount+=newproductList[index].price;
    setProductList(newproductList);
    settotalAmount(newTotalAmount);
  }

  const decrementQuantity = (index)=>{
    let newproductList = [...product_List];
    let newTotalAmount = totalAmount;
    if(newproductList[index].quantity > 0)
     { newproductList[index].quantity-- ;
      newTotalAmount -= newproductList[index].price;
     }
     else { 
      newproductList[index].quantity =0;
     }
      setProductList(newproductList);
      settotalAmount(newTotalAmount);
  }

  const resetQuantity = () => {
    let newproductList = [...product_List];
    let newCount = countTotalItem;
    newproductList.map((products) => {
      products.quantity=0;
    });
    setProductList(newproductList);
    settotalAmount(0);
    
    newCount=0;
    setTotalItem(newCount);
  };

  const removeItem = (index) =>{
    let newproductList = [...product_List];
    let newTotalAmount = totalAmount;
    let newCount = countTotalItem;
    console.log("total amount without _ = ", totalAmount);
    newTotalAmount -= (newproductList[index].quantity * newproductList[index].price); 
    newproductList.splice(index,1);
    console.log("total amount with - = ", totalAmount);
    setProductList(newproductList);
    settotalAmount(newTotalAmount);
    newCount -1 > 0 ? newCount-=1 : newCount=0;
    setTotalItem(newCount);
    console.log(newproductList , newTotalAmount);
    console.log("total amount after update = ", totalAmount);
  }

  const addItem = (name,price) =>{
    let newproductList = [...product_List];
    let newCount = countTotalItem;
    newproductList.push({
      price:price,
      name:name,
      quantity:0
    });
    newCount +=1;
    setTotalItem(newCount);
    setProductList(newproductList);
  } 


  return <>
  <Navbar countTotalItem = {countTotalItem}/>
  <main className="container mt-5">
  <Additem addItem = {addItem}/>  
  <ProductList productList = {product_List} incrementQuantity= {incrementQuantity} decrementQuantity= {decrementQuantity} removeItem = {removeItem}/>
  </main>
  <Footer totalAmount = {totalAmount} resetQuantity = {resetQuantity} />
   </>;
}

export default App;
