import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../images/javaslide.jpg';
import Image2 from '../images/springbootslide.jpg';
import Image3 from '../images/reactslide.jpg';
import Image4 from '../images/bootstrapslide.jpg';
import Image5 from '../images/javascriptslide.jpg';

const CarouselComponent=()=> {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="Java slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Springboot slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="React slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image4}
          alt="Bootstrap slide"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image5}
          alt="JavaScript slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;