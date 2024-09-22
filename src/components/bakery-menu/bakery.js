import { useState, useEffect, useContext } from 'react';
import { BakeryCategory } from '../../contexts/bakery-context/bakery-context';
import axios from 'axios';
import './bakery.css';
import CustomCakeForm from '../custom-cake-form/custom-cake-form';
import ProductPage from '../product-page/product-page';
import { CloseProduct } from '../../contexts/close-product-context/close-product-context';

function Bakery() {
    const {closeProduct, setCloseProduct} = useContext(CloseProduct)
    const [bakeryItems, setBakeryItems] = useState([]);
    const [title, setTitle] = useState("");
    const { bakeryCategory } = useContext(BakeryCategory);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showCustomCakeForm, setShowCustomCakeForm] = useState(false);

    const handleProductClick = (item) => {
        setSelectedProduct(item);
        setCloseProduct(true)
    }
    
    useEffect(() => {
        const fetchBakeryItems = async () => {
            if (!bakeryCategory) {
                try {
                    const pastryProducts = await axios.get('http://127.0.0.1:8000/api/product-list/?category=Pastries');
                    const cakeProducts = await axios.get(`http://127.0.0.1:8000/api/product-list/?category=Cakes`)
                    setBakeryItems([...pastryProducts.data, ...cakeProducts.data]);
                } catch (error) {
                    alert("Error Fetching Products " + error.message);
                }
            } else {
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/api/product-list/?category=${bakeryCategory}`);
                    setBakeryItems(response.data);
                } catch (error) {
                    alert("Error Fetching Products " + error.message);
                }
            }
        };

        fetchBakeryItems();
    }, [bakeryCategory]);

    useEffect(() => {
        switch (bakeryCategory) {
            case "Pastries":
                setTitle("Pastries");
                setShowCustomCakeForm(false);
                break;
            case "Cakes":
                setTitle("Cakes");
                setShowCustomCakeForm(true);
                break;
            case "Drinks":
                setTitle("Coffee & Tea");
                setShowCustomCakeForm(false);
                break;
            default:
                setTitle("Bakery");
        }
    }, [bakeryCategory]);

    return (
        <div>
            <div className="bakery-grid-container">
                <h1>Butter & Batter {title}</h1>
                <div className="bakery-grid">
                    {bakeryItems.length > 0 ? (
                        bakeryItems.map(item => (
                            <div
                                className='bakery-items-container'
                                key={item.id}
                                onClick={() => handleProductClick(item)}
                            >
                                <h3>{item.name}</h3>
                                <span>${item.price}</span>
                                <img src={item.image_url} alt={item.name} />
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                {selectedProduct && closeProduct && <ProductPage product={selectedProduct} />}
            </div>
            {showCustomCakeForm && <CustomCakeForm />}
        </div>
    );
}

export default Bakery;
