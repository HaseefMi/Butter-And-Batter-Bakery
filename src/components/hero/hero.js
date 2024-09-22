import './hero.css';
import PastriesImage from '../../assets/pasteries.png';

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-text">
                <p className="made-with-love">Made With Love</p>
                <h1 className="heading-hero">The Finest Bakery in the GTA</h1>
            </div>
            <img src={PastriesImage} alt='Pastries' className='hero-pastry-image' />
        </div>
    );
}

export default Hero;
