import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveToCart }) => {
    //  Conditional Rendering 1
    let message;
    // if (cart.length === 0) {
    //     message = <p>Places Add to cart</p>
    // }
    // else {
    //     message = <div>
    //         <h3>Thank You</h3>
    //     </div>
    // }
    return (
        <div>
            <h3>Order Summary: {cart.length}</h3>

            {/* <h3 className={cart.length === 1 ? 'red' : 'blue'}>Order Summary: {cart.length}</h3> */}
            {/* <p  className={`bold  ${cart.length === 3 ? 'yellow' : 'purple'}`}>Somting...</p> */}
            {/*  Conditional Rendering 2 */}
            {/* {
                cart.length > 2
                    ? <span>Aro kinno</span>
                    : <span>gorib</span>
            }
            {message} */}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveToCart(tshirt._id)}>Delete</button></p>)
            }
            {/* {
                cart.length === 2 && <p>Bounsa</p>
            }
            {
                cart.length === 3 || <h3>3 ta atow hoilo na</h3>
            } */}
        </div>
    );
};

export default Cart;

/**
 *  Conditional Rendering 
 * 1. use if else to set a variable that will contain  an element, components
 * 2. ternary operator - condition ? 'for true' : 'false'
 * 3. && 
 * 4. ||
 *  conditional css class
 * 
 * */ 