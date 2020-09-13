import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import FancyHouse from "../../images/FancyHouse.jpg"
import Fancyhouse2 from "../../images/FancyHouse2.jpg"
import "./Home.css"

export default function CarouselSlider() {
    return (
        <div>
            <Carousel dynamicHeight={true} interval={8000} transitionTime={600} infiniteLoop autoPlay showThumbs={false}>
                <div>
                    <img src={FancyHouse} alt="house1" />
                </div>
                <div>
                    <img src={Fancyhouse2} alt="house2" />
                </div>
            </Carousel>
        </div>
    )
}