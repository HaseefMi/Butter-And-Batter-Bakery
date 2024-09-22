import './product-page.css';
import { CloseProduct } from '../../contexts/close-product-context/close-product-context';
import { useContext } from 'react'
import { CartItems } from '../../contexts/cart-context/cart-context';

function ProductPage({product}) {
    const {setCloseProduct} =  useContext(CloseProduct);
    const {manageCart} = useContext(CartItems)
    
    const handleAddToCart = () => {
        manageCart(product, 'add');
        alert(product.name + " Added to Cart")
    }

    return (
        <div className="overlay">
            <div className="popup">
                <button className="close-button" onClick={() => {setCloseProduct(false)}}>x</button>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <img src={product.image_url} alt={product.name} />
                <p id='description'>{product.description}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductPage;
