import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import FancyHouse from "../../images/FancyHouse.jpg"
import Fancyhouse2 from "../../images/FancyHouse2.jpg"

export default function Home() {
    return (
        <div className="carousel-wrapper">
            <Carousel interval={6000} transitionTime={600} infiniteLoop autoPlay>
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