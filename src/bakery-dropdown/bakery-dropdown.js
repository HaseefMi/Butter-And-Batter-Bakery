import './bakery-dropdown.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { BakeryCategory } from '../contexts/bakery-context/bakery-context';

function BakeryDropdown() {
    const {setBakeryCategory} = useContext(BakeryCategory);

    return (
        <div>
            <Link to='/products' className='dropdown-link' onClick={() => {setBakeryCategory("Pastries")}}>Pastries</Link>
            <Link to='/products' className='dropdown-link' onClick={() => {setBakeryCategory("Cakes")}}>Cakes</Link>
        </div>
    );
}

export default BakeryDropdown;
