import React from "react";

export default function Summary({data, size, toppings}) {

const getTotalPrice = () => {
    const sizePrice = data.sizes.find((element) => element.name === size)?.price || 0;
    
    const toppingsPrice = data.toppings
        .filter((element) => toppings.includes(element.name)) 
        .reduce((acc, element) => acc + element.price, 0);
    
    const totalPrice = sizePrice + toppingsPrice; 
    
    return totalPrice
} 
    return (
        <div className='summary-container'>
            <h2>Summary:</h2>
            <p>Size: {size}</p>
            <p>Toppings: {toppings}</p>            
            <h2 className='totalcost'>Total cost: ${size || toppings.length ? getTotalPrice() : 0}</h2> 
        </div>
        )
}