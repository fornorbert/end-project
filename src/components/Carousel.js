import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fitness-zone.pl/wp-content/uploads/2018/10/man.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Stay Powerfull </h3>
          <p>Keep your Body and Soul indestructible!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fitness-zone.pl/wp-content/uploads/2018/10/sport-2250970_1920.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Stay Powerfull</h3>
          <p>Keep your Body and Soul indestructible!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fitness-zone.pl/wp-content/uploads/2018/10/sport-2260736_1920.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Stay Powerfull</h3>
          <p>Keep your Body and Soul indestructible!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
