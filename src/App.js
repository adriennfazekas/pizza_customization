import React, { useState } from 'react';
import Size from './components/Size/size';
import Toppings from './components/Toppings/toppings';
import Summary from './components/Summary/summary';
import data from "./data.json"
import './App.css';
import pizza from "./assets/pizza.png"
import pizzaslice from "./assets/pizzaslice.png"

function App() {
  const [toppings, setToppings] = useState([])
  const [size, setSize] = useState()

  const activeToppings = (toppings) => {
    setToppings(toppings.join(", "))
  }

  const activeSize = (size) => {
    setSize(size)
  } 

  return (
    <div className="App">
      <header>        
        <img src={pizza} className='pizza' alt='rotating pizza'></img>
        <h1>Alfredo's Pizza Cafe</h1>
        <img src={pizza} className='pizza' alt='rotating pizza'></img>                
      </header>

      <main>
        <section>
          <Size sizes={data.sizes} activeSize={activeSize} />
          <Toppings toppings={data.toppings} activeToppings={activeToppings} />
          <Summary data={data} size={size} toppings={toppings} />          
        </section>
          
        <section className='flex-section'>
          <img src={pizzaslice} className={`pizzaslice ${size && "visible"}`} alt='pizza slice'></img>
          <img src={pizzaslice} className={`pizzaslice rotate ${toppings && "visible"}`} alt='rotated pizza slice'></img>
        </section>
          
      </main>

      <footer>
        <p>Scranton, PA</p>
      </footer>
    </div>
  );
}

export default App;
