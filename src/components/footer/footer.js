import './footer.css';
import Logo from '../../assets/logo.png';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { BakeryCategory } from '../../contexts/bakery-context/bakery-context';
import { Fragment, useContext } from 'react';

function Footer() {
    const {setBakeryCategory} = useContext(BakeryCategory);
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    }

    return (
        <Fragment>
            <div className='footer-container'>
                <img src={Logo} className='nav-footer-logo' onClick={handleLogoClick} />
                <Link className='footer-link' to='/about'>About</Link>
                <Link className='footer-link' to='/products' onClick={() => {setBakeryCategory(null)}}>Bakery</Link>
                <Link className='footer-link footer-link--category' to='/products' onClick={() => {setBakeryCategory('pastry')}}>Pastries</Link>
                <Link className='footer-link footer-link--category' to='/products' onClick={() => {setBakeryCategory('cake')}}>Cakes</Link>
                <Link className='footer-link footer-link--category' to='/products' onClick={() => {setBakeryCategory('coffee-tea')}}>Coffee & Tea</Link>
                <Link className='footer-link' to='/custom-cakes'>Custom Cakes</Link>
                <Link className='footer-link' to='/contact'>Contact</Link>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Footer;
