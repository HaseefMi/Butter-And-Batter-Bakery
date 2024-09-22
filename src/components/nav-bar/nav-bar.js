import './nav-bar.css'
import Logo from '../../assets/logo.png'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import { Fragment, useState, useContext } from 'react'
import { BakeryCategory } from '../../contexts/bakery-context/bakery-context'
import BakeryDropdown from '../../bakery-dropdown/bakery-dropdown'
import { CartItems } from '../../contexts/cart-context/cart-context'
import SearchBar from '../search-bar/search-bar'

function NavBar() {
    const [bakeryLinkHover, setBakeryLinkHover] = useState(false);
    const { setBakeryCategory } = useContext(BakeryCategory);
    const {totalPrice, totalQuantity} = useContext(CartItems);
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(`/${route}`);
    }

    return (
        <Fragment>
            <div className='nav-container'>
                <img src={Logo} alt='Logo' className='nav-logo' onClick={() => {handleClick("")}} />
                <SearchBar />  
                <Link to='/about' className='nav-item'>About</Link>
                <div 
                    className='nav-item nav-item-bakery' 
                    onMouseEnter={() => setBakeryLinkHover(true)} 
                    onMouseLeave={() => setBakeryLinkHover(false)}
                >
                    Bakery
                    {bakeryLinkHover && (
                        <div className="dropdown-container">
                            <BakeryDropdown />
                        </div>
                    )}
                </div>
                <Link to='/products' className='nav-item' onClick={() => { setBakeryCategory("Drinks") }}>Coffee & Tea</Link>
                <Link to='/custom-cakes' className='nav-item'>Custom Cakes</Link>
                <Link to='contact' className='nav-item'>Contact</Link>
                <Link to='/checkout'className='nav-price'>🛒 ${totalPrice.toFixed(2)} ({totalQuantity})</Link>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavBar
