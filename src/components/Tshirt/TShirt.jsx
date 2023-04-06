import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
    const { name, price, picture, gender} = tshirt;
    return (
        <div className='t-shirt'>
           <img src={picture} alt="" />
           <h4>Name: {name}</h4>
           <p>Price:$ {price}</p>
           <button onClick={() => handleAddToCart(tshirt)} className='btn-buy'>Buy Now</button>
        </div>
    );
};

export default TShirt;