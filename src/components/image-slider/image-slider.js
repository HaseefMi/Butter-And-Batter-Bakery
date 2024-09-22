import './image-slider.css';
import Eclaires from '../../assets/eclaires.png';
import FruitTarts from '../../assets/fruit-tarts.png';
import Macrons from '../../assets/macrons.png';
import StrawberryCake from '../../assets/strawberry-cake.png';
import CinnamonRolls from '../../assets/cinnamon-rolls.png';
import { useState, useEffect } from 'react';

const galleryData = [
    {
        name: "Strawberry Cake",
        imageSrc: StrawberryCake  
    },
    {
        name: "Eclaires",
        imageSrc: Eclaires  
    },
    {
        name: "Fruit Tarts",
        imageSrc: FruitTarts
    },
    {
        name: "Macrons",
        imageSrc: Macrons  
    },
    {
        name: "Cinnamon Rolls",
        imageSrc: CinnamonRolls  
    }
];

function ImageSlider() {
    const [galleryIndex, setGalleryIndex] = useState(0)
    const gallery = galleryData[galleryIndex];
    const [pause, setPause] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            if (pause) return;
            GallerySwitch(+1);
        }, 2000)

        return () => clearInterval(interval);
    })


    const GallerySwitch = (direction) => {
        setGalleryIndex((prevIndex) => {    
            let newIndex = prevIndex + direction;
            if (newIndex < 0) {
                return 4 
            } else if (newIndex > 4) {
                return 0
            } else {
                return newIndex;
            }
        })
    }



    return (
        <div className='img-slider-container' onClick={() => {setPause(!pause)}}>
           <p className='img-slider-name'>{gallery.name}</p>         
           <img className='img-slider-img'src={gallery.imageSrc} alt={gallery.name} /> 
           <button className='img-slider-button prev'onClick={() => GallerySwitch(-1)}>&larr;</button>
           <button className='img-slider-button pause' onClick={() => setPause(!pause)}>{pause ? "Resume" : "Pause"}</button>
           <button className='img-slider-button next' onClick={() => GallerySwitch(+1)}>&rarr;</button>
           </div>
    );
}

export default ImageSlider;
