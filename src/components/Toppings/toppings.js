import React, { useEffect } from "react";
import { useState } from "react";

export default function Toppings({toppings, activeToppings}) {
const [currentToppings, setCurrentToppings] = useState([])

const handleInputChange = (e) => {
    setCurrentToppings((prevToppings) => {
        if(prevToppings.includes(e.target.value)) {
            return prevToppings.filter(element => element !== e.target.value)
        } else return [...prevToppings, e.target.value]
    });
}

const renderToppings = () => {
    return toppings.map((topping, index) => {   
        return (     
            <div key={index}>
            <input 
                type='checkbox' 
                id={topping.name} 
                name={topping.name} 
                value={topping.name} 
                onChange={handleInputChange}
            >
            </input>
            <label htmlFor={topping.name}>{topping.name} ${topping.price}</label>
        </div>   
        ) 
    })}


useEffect(() => {
    activeToppings(currentToppings)
},[currentToppings])

    return (
        <div className='toppings-container'>
            <h2>Toppings:</h2>
            {toppings && renderToppings()}                
        </div>
    )
}