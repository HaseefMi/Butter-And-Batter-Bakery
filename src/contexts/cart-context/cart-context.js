import { createContext, useState, useEffect } from 'react';

export const CartItems = createContext();

export const CartItemsProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const priceCalc = cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
        setTotalPrice(priceCalc);
    }, [cartItems]);

    useEffect(() => {
        const quantityCalc = cartItems.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
        setTotalQuantity(quantityCalc);
    }, [cartItems]);

    const manageCart = (product, action) => {
        setCartItems((prevCartItems) => {
            const itemIndex = prevCartItems.findIndex(item => item.id === product.id);
            const newCartItems = [...prevCartItems];

            if (itemIndex !== -1) {
                if (action === 'add') {
                    newCartItems[itemIndex].quantity += 1;
                } else if (action === 'remove') {
                    newCartItems[itemIndex].quantity -= 1;
                    if (newCartItems[itemIndex].quantity <= 0) {
                        newCartItems.splice(itemIndex, 1);
                    }
                }
            } else {
                if (action === 'add') {
                    return [...prevCartItems, { ...product, quantity: 1 }];
                }
            }

            return newCartItems;
        });
    };

    return (
        <CartItems.Provider value={{ cartItems, setCartItems, manageCart, totalPrice, totalQuantity}}>
            {children}
        </CartItems.Provider>
    );
};
