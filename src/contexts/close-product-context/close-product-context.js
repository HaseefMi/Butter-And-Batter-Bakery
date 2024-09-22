import { createContext, useState } from 'react'

export const CloseProduct = createContext({
    closeProduct: true,
    setCloseProduct: () => {},
});

export const CloseProductProvider = ({children}) => {
    const [closeProduct, setCloseProduct] = useState(true);
    const value = {
        closeProduct,
        setCloseProduct
    };

    return <CloseProduct.Provider value={value}>{children}</CloseProduct.Provider>;
}