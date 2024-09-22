import './custom-cake-page.css'
import ElsaCakeImg from '../../assets/custom-cakes/elsa-cake.png'
import WeddingCakeImg from '../../assets/custom-cakes/wedding-cake.png'
import CarsCake from '../../assets/custom-cakes/lightning-mcqueen-cake.png'
import LionCake from '../../assets/custom-cakes/lion-cake.png'
import ShoeCake from '../../assets/custom-cakes/nike-cake.png'
import { useState, useEffect } from 'react'
import CustomCakeForm from '../custom-cake-form/custom-cake-form'
import AnniversaryCake from '../../assets/custom-cakes/anniversary-cake.png'
import BabyShowerCake from '../../assets/custom-cakes/baby-shower-cake.png'
import FrozenCake from '../../assets/custom-cakes/frozen-cake.png'
import GraduationCake from '../../assets/custom-cakes/graduation-cake.png'
import MarvelCake from '../../assets/custom-cakes/marvel-cake.png'
import ToyStoryCake from '../../assets/custom-cakes/toy-story-cake.png'
import WeddingCake2 from '../../assets/custom-cakes/wedding-cake-2.png'
import WeddingCake3 from '../../assets/custom-cakes/wedding-cake-3.png'
import WeddingCake4 from '../../assets/custom-cakes/wedding-cake-4.png'

const galleryData = [
    {
        name: "Frozen Elsa Cake",
        imageSrc: ElsaCakeImg
    },
    {
        name: "Wedding Cake",
        imageSrc: WeddingCakeImg
    },
    {
        name: "Lightning McQueen Cake",
        imageSrc: CarsCake
    },
    {
        name:"Lion Cake",
        imageSrc: LionCake
    },
    {
        name:"Nike Shoe Cake",
        imageSrc: ShoeCake
    }
]

const weddingImages = [
    {
        id: 1,
        imageSrc: WeddingCake2
    },
    {
        id: 2,
        imageSrc: WeddingCake3
    },
    {
        id: 3,
        imageSrc: WeddingCake4
    },
]

const birthdayImages = [
    {
        id: 1,
        imageSrc: MarvelCake
    },
    {
        id: 2,
        imageSrc: ToyStoryCake
    },
    {
        id: 3,
        imageSrc: FrozenCake
    },
]

const specialEventsImages = [
    {
        id: 1,
        imageSrc: AnniversaryCake
    },
    {
        id: 2,
        imageSrc: GraduationCake
    },
    {
        id: 3,
        imageSrc: BabyShowerCake
    },
]

function CustomCakePage() {
    const [galleryIndex, setGalleryIndex] = useState(0)
    const gallery = galleryData[galleryIndex];
    const [pause, setPause] = useState(false);
    const [weddingGalleryIndex, setWeddingGalleryIndex] = useState(0)
    const [birthdayGalleryIndex, setBirthdayGalleryIndex] = useState(0)
    const [specialEventsGalleryIndex, setSpecialEventsGalleryIndex] = useState(0)
    const weddingGallery = weddingImages[weddingGalleryIndex];
    const birthdayGallery = birthdayImages[birthdayGalleryIndex];
    const specialEventsGallery = specialEventsImages[specialEventsGalleryIndex];

    const MiniGallerySwitch = (setIndex, images) => {
        setIndex((prevIndex) => {
            let newIndex = prevIndex + 1;
            if (newIndex === images.length) {
                return 0
            } else {
                return newIndex
            }
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (pause) return;
            GallerySwitch(+1);
        }, 2000)

        return () => clearInterval(interval);
    }, [pause])

    useEffect(() => {
        const weddingInterval = setInterval(() => {
            MiniGallerySwitch(setWeddingGalleryIndex, weddingImages);
        }, 1500)

        return () => clearInterval(weddingInterval);
    }, [])

    useEffect(() => {
        const birthdayInterval = setInterval(() => {
            MiniGallerySwitch(setBirthdayGalleryIndex, birthdayImages);
        }, 1500)

        return () => clearInterval(birthdayInterval);
    }, [])

    useEffect(() => {
        const specialEventsInterval = setInterval(() => {
            MiniGallerySwitch(setSpecialEventsGalleryIndex, specialEventsImages);
        }, 1500)

        return () => clearInterval(specialEventsInterval);
    }, [])

    const GallerySwitch = (direction) => {
        setGalleryIndex((prevIndex) => {    
            let newIndex = prevIndex + direction;
            if (newIndex < 0) {
                return galleryData.length - 1
            } else if (newIndex >= galleryData.length) {
                return 0
            } else {
                return newIndex;
            }
        })
    }

    return (
        <div>
            <div class="intro-section">
             <h1>Butter & Batter Custom Cakes</h1>
            <h2>Create Your Perfect Custom Cake!</h2>
            <p>This is where your dream cake becomes a reality! Whether you're celebrating a special occasion or simply indulging, our custom cakes are crafted to delight.</p>
        </div>

            
            <div className='img-slider-container' onClick={() => {setPause(!pause)}}>
                <p className='img-slider-name'>{gallery.name}</p>         
                <img className='img-slider-img' src={gallery.imageSrc} alt={gallery.name} /> 
                <button className='img-slider-button prev' onClick={() => GallerySwitch(-1)}>&larr;</button>
                <button className='img-slider-button pause' onClick={() => setPause(!pause)}>{pause ? "Resume" : "Pause"}</button>
                <button className='img-slider-button next' onClick={() => GallerySwitch(+1)}>&rarr;</button>
            </div>
            
            <div className='container'>
                <div className='column weddings'>
                    <h3>Weddings</h3>
                    <p>Elegant and personalized cakes for your special day</p>
                    <img src={weddingGallery.imageSrc} alt="Wedding Cake" />
                </div>
                <div className='column birthdays'>
                    <h3>Birthdays</h3>
                    <p>Fun and unique designs for all ages</p>
                    <img src={birthdayGallery.imageSrc} alt="Birthday Cake" />
                </div>
                <div className='column special-events'>
                    <h3>Special Events</h3>
                    <p>Custom cakes for anniversaries, graduations, and more</p>
                    <img src={specialEventsGallery.imageSrc} alt="Special Events Cake" />
                </div>
            </div>

            <CustomCakeForm />

            <br />
            <div class="faq-section">
            <h2>FAQ's</h2>
        <div class="faq-item">
            <li>What is the lead time for custom cake orders?</li>
            <p>We recommend placing your order at least 1 week in advance to ensure availability.</p>
        </div>
        <div class="faq-item">
            <li>Do you offer delivery?</li>
            <p>Yes, we offer delivery within the Greater Toronto Area. Pickup options are also available.</p>
        </div>
        <div class="faq-item">
            <li>What payment methods do you accept?</li>
            <p>We accept all methods including Cash, Credit and Debit from most major providers</p>
        </div>
        <div class="faq-item">
            <li>Can I make changes to my order after it’s placed?</li>
            <p>Changes can be made up to 4 days before the pickup/delivery date.</p>
        </div>
    </div>
        </div>
    )
}

export default CustomCakePage