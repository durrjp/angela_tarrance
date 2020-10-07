import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ValleVerde from "../../images/1641ValleVerde.jpg"
import Clarence1 from "../../images/4304ClarenceOutside.jpg"
import Lysander from "../../images/5256LysanderCeiling.jpg"
import GrannyWhite from "../../images/5444GrannyWhiteBack.jpg"
import "./Home.css"

export default function CarouselSlider() {
    return (
        <div>
            <Carousel dynamicHeight={true} interval={2500} transitionTime={800} infiniteLoop autoPlay showThumbs={false}>
                <div>
                    <img className="carousel-image" src={ValleVerde} alt="house1" />
                </div>
                <div>
                    <img className="carousel-image" src={Clarence1} alt="house2" />
                </div>
                <div>
                    <img className="carousel-image" src={Lysander} alt="suburbs" />
                </div>
                <div>
                    <img className="carousel-image" src={GrannyWhite} alt="suburbs" />
                </div>
            </Carousel>
        </div>
    )
}