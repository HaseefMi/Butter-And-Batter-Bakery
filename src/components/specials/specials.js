import './specials.css'
import BakedGoodsImage from '../../assets/baked-goods.png'
import CakeImage from '../../assets/cake.png'
import BakeryImage from '../../assets/bakery.png'
import { useNavigate } from 'react-router-dom';
import { BakeryCategory } from '../../contexts/bakery-context/bakery-context'
import { useContext } from 'react'

function Specials() {
    const navigate = useNavigate();

    const {setBakeryCategory} = useContext(BakeryCategory)

    const handleClick = (category, route) => {
        setBakeryCategory(category)
        navigate(`/${route}`)
    }

    return (
        <div className='specials-container'>
            <div className='specials-card-container'>
                <img src={BakedGoodsImage} alt='baked-goods' />
                <p>Order Online</p>
                <h3>Browse Our Baked Goods</h3>
                <span>See the best we have to offer</span>
                <button type='button' onClick={() => handleClick("pastry", "products")}>Learn More</button>
            </div>
            <div className='specials-card-container'>
                <img src={CakeImage} alt='cake-image' />
                <p>Now Available</p>
                <h3>Shop Our Specialty Cakes</h3>
                <span>The best</span>
                <button type='button' onClick={() => handleClick("cake", "products")}>Learn More</button>
            </div>
            <div className='specials-card-container'>
                <img src={BakeryImage} alt='bakery' />
                <p>Location</p>
                <h3>Check out our Newest Location</h3>
                <span>Stunning, Elegant</span>
                <button type='button'>Learn More</button>
            </div>
        </div>
    )
}

export default Specials