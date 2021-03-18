import React, {useState, useEffect} from 'react'

const Checkout=(props)=>{
    const [orderTotal,setOrderTotal]=useState(0);

    useEffect(()=>{
        setOrderTotal(props.orderTotal)
    },[props])
    
    return <React.Fragment>
            <h1>Checkout</h1>
            <p>Total:{props.orderTotal}</p>
        </React.Fragment>
}

export default Checkout;