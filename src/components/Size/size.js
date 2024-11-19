import React from "react";
import { useState, useEffect } from "react";

export default function Size({sizes, activeSize}) {
    const [currentRadio, setCurrentRadio] = useState()

    const handleInputChange = (e) => {
        setCurrentRadio(e.target.value)
    }

    const renderSizes = () => {
        return sizes.map((size, index) => {
            return (
                <div key={index}>
                    <input 
                        key={index}
                        id={size.name}
                        name="sizeOption" 
                        type='radio' 
                        value={size.name} 
                        checked={currentRadio === size.name} 
                        onChange={handleInputChange}></input>
                    <label htmlFor={size.name}>{size.name} ${size.price}</label>
                </div>
            )
        })
    }

    useEffect(() => {
        activeSize(currentRadio)
    },[currentRadio])

    return (
        <div className='size-container'>
            <h2>Size:</h2>
            {sizes && renderSizes()}                                
      </div>    
    )
}