import React, {useState, useEffect} from 'react'

import Item from './Item';


const Cart=(props)=>{
    const [items, setItems]=useState([...props.items]);

    useEffect(()=>{
        setItems(props.items)
    },[props])

    const removeItem = (itemm) => {
        const filterItems = items.filter(item => {
            return item.uniqueId != itemm.uniqueId 
        })
        props.filteredRmItem(filterItems);
    }

  

    return <React.Fragment>
        <h1>Cart</h1>
        
       
        {
            items.map((item)=>{
                return (
                        <>
                        <h1>{item.product_short_description}</h1>
                        <img src={item.imageUrl[0]}/>
                        <p>Price:{item.min_list_price}</p>
                        <button onClick={() => removeItem(item)}>Remove</button>
                        </>
                )
            })
        }
    </React.Fragment>
}

export default Cart;