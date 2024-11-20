import React from 'react';
import Product from '../../Assets/Silo.jpg'
import './index.css'
import { MaterialSymbol } from 'react-material-symbols';
import 'react-material-symbols/outlined';

const Silos = () => {
  return (
    <div className='SilosContainer'>
      <div className='SilosDiv'>
        <div className='TextWrapper'>
          <h1 className='SilosText'>
            Product Silos
          </h1>
          <div className='SilosButton'>
            <MaterialSymbol icon="add" size={24}/>
            Take a closer look
          </div>
        </div>

        <img 
          src={Product} 
          className='SilosImage'/>
      </div>
    </div>
  );
};

export default Silos;