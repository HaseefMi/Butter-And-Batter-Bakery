import './checkout.css';
import { useContext, useEffect, useState } from 'react';
import { CartItems } from '../../contexts/cart-context/cart-context';

function Cart() {
    const { cartItems, manageCart, totalPrice } = useContext(CartItems);
    return (
        <div className='cart-container'>
            <h3>Your Cart</h3>
            {cartItems.length === 0 ? (
                <p>Shop to Add Items to Cart</p>
            ) : (
                cartItems.map(item => (
                    <div className='cart-item' key={item.id}>
                        <p className='cart-item-name'>{item.name}</p>
                        <p className='cart-item-price'>${item.price}</p>
                        <p className='cart-item-quantity'>{item.quantity}</p>
                        <img src={item.image_url} alt={item.name} />
                        <button onClick={() => { manageCart(item, 'add'); }}>+</button>
                        <button onClick={() => { manageCart(item, 'remove'); }}>-</button>
                    </div>
                ))
            )}
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
}

export default Cart;
