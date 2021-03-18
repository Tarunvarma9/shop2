import React, {useState, useEffect} from 'react'
import Cart from './Cart'
import Catalog from './Catalog'
import Checkout from './Checkout'

import './Shop.css'

const Shop=(props)=>{
    const [items,setItems]=useState([]);
    const [cartItems, setCartItems]=useState([]);
    const [orderTotal, setOrderTotal]=useState(0);
   // const[qty,setQty]=useState(0);

    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);

    useEffect(()=>{
        fetch('http://api.jsoneditoronline.org/v1/docs/572180836c614dadb4b2eccdc3a33cbc/data?jsonp')
        .then(response=>response.json())
        .then(result=>{
            console.log(result.response.products)
            setItems(result.response.products);
            setLoading(false);
        })
        .catch((err)=>{
            setLoading(false);
            setError(true);
        })
    },[])


    const addCart = (item)=> {
        console.log("shop item callback", item);
        setCartItems([...cartItems, item]);
        setOrderTotal(orderTotal + item.min_list_price);
  
     
}  

      
    
    const removeItem = (itemm) => {
        
        console.log("after Remove Item filter Items: ", itemm);
        setCartItems([...itemm,itemm]);
        

        if(itemm.length === 0){
            
            setOrderTotal(0)

        }else{
            itemm.map( item => {
                return setOrderTotal(orderTotal - item.min_list_price  );
            })
        }
        
    }


  return <div className="row">
                <h1>Shop</h1>
                <div className="column">
                    <Catalog items={items} addCart={addCart}/>
                </div>
                <div className="column">
                    <Cart items={cartItems} filteredRmItem={removeItem} />
                    <Checkout orderTotal={orderTotal}/>
                </div>
            </div>

}

export default Shop;