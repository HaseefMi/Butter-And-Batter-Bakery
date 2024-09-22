import { createContext, useState } from 'react'

export const BakeryCategory = createContext({
    bakeryCategory: null,
    setBakeryCategory: () => {},
});

export const BakeryCategoryProvider = ({children}) => {
    const [bakeryCategory, setBakeryCategory] = useState(null);
    const value = {
        bakeryCategory,
        setBakeryCategory
    };

    return <BakeryCategory.Provider value={value}>{children}</BakeryCategory.Provider>;
}