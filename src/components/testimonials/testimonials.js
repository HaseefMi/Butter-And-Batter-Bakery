import { useState } from 'react'
import './testimonials.css';

const testimonialsData = [
    {
        "name": "Richard. J",
        "review": "I absolutely love this bakery! The pastries are always fresh and incredibly delicious. The croissants are flaky and buttery, and the selection of cakes is fantastic. The staff is friendly and the atmosphere is cozy, making it a perfect spot for a morning coffee and pastry. Highly recommend!"
    },
    {
        "name": "Emma. D",
        "review": "This bakery never disappoints. From the moment you walk in, you're greeted with the delightful aroma of freshly baked goods. The bread is always perfectly baked, with a crisp crust and soft interior. The variety of sweets is amazing, and every item I've tried has been top-notch. The customer service is exceptional, making every visit a pleasure."
    },
    {
        "name": "Mike. R",
        "review": "What a wonderful find! This bakery offers an impressive array of baked goods, each more delicious than the last. The attention to detail in both flavor and presentation is evident. The cinnamon rolls are a must-try, and the coffee is superb. The cozy seating area adds to the charm, making it a perfect place to relax and enjoy a treat. Definitely my go-to bakery from now on!"
    }
];

function Testimonials() {
    const [reviewIndex, setReviewIndex] = useState(0)
    const testimonial = testimonialsData[reviewIndex]

    const handleClick = (direction) => {
        setReviewIndex((prevIndex) => {
            let newIndex = prevIndex + direction;
            if (newIndex < 0) {
                return 2
            } else if (newIndex > 2) {
                return 0
            } else {
                return newIndex;
            }
        })
    }
    return (
        <div className='testimonials-container'>
            <p className='testimonial-name'>{testimonial.name}</p>
            <span className='testimonial-review'>{testimonial.review}</span>
            <br />
            <button className='testimonial-button'onClick={() => handleClick(-1)}>&larr;</button>
            <button className='testimonial-button' onClick={() => handleClick(+1)}>&rarr;</button>
        </div>
    );
}

export default Testimonials;
