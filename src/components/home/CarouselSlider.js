import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import FancyHouse from "../../images/FancyHouse.jpg"
import Fancyhouse2 from "../../images/FancyHouse2.jpg"
import Suburbs from "../../images/suburbs.jpg"
import "./Home.css"

export default function CarouselSlider() {
    return (
        <div>
            <Carousel dynamicHeight={true} interval={6000} transitionTime={800} infiniteLoop autoPlay showThumbs={false}>
                <div>
                    <img className="carousel-image" src={FancyHouse} alt="house1" />
                </div>
                <div>
                    <img className="carousel-image" src={Fancyhouse2} alt="house2" />
                </div>
                <div>
                    <img className="carousel-image" src={Suburbs} alt="suburbs" />
                </div>
            </Carousel>
        </div>
    )
}