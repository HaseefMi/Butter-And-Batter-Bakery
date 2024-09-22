import Hero from '../components/hero/hero'
import ImageSlider from '../components/image-slider/image-slider'
import Specials from '../components/specials/specials'
import Testimonials from '../components/testimonials/testimonials'

function HomePage() {
  return (
    <div>
      <Hero />
      <ImageSlider />
      <Specials />
      <Testimonials />
  </div>
  );
}

export default HomePage;
