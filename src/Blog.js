import React from 'react'
import {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Blog() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  

    return(
        <section className="Blog">
            <div className="container">
            <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://autoportal.com/img/new-cars-gallery/rollsroyce/wraith/exterior/32d756e/rollsroyce-wraith-32d756e-1600x1200.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Rolls Royce</h3>
          <p>A large, expensive, and comfortable car of very high quality</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/377802.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Audi</h3>
          <p>the top luxury car makers in the world, known for innovative design, smooth handling and speed. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapersmug.com/download/1920x1080/5f7f6e/luxurious-car-black.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Benz</h3>
          <p>
          From exclusive comfort in the rear to the E-ACTIVE BODY CONTROL suspension.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
        </section>
    )
}
export default Blog