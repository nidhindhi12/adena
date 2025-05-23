import React from 'react'
import homeImg1 from '../images/homeImg1.jpeg'
import homeImg2 from '../images/homeImg2.jpeg'
import homeImg3 from '../images/homeImg3.webp'
import { Carousel,Container } from 'react-bootstrap'

const Slider = () => {
    const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, };
    const homeSlider = [homeImg2, homeImg1, homeImg3];
    return (
        <div>
            <Container fluid >
                <Carousel>
                    {homeSlider.map((item, index) => (
                        <Carousel.Item key={index}>
                            <img src={item} alt={`slide-s${index}`} className='w-100 h-100 rounded-4 mt-3'/>
                        </Carousel.Item>
                    ))}
                </Carousel>

            </Container>
        </div>
    )
}

export default Slider
