import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ValleVerde from "../../images/carousel/1641ValleVerdeStreet.jpg"
import Bathroom from "../../images/carousel/1641ValleVerdeBathroom.jpg"
import Clarence1 from "../../images/carousel/4304ClarenceOutside.jpg"
import Lysander from "../../images/carousel/5256LysanderCeiling.jpg"
import GrannyWhite from "../../images/carousel/5444GrannyWhiteBack.jpg"
import Nottoway from "../../images/carousel/NottowayFireplace.jpg"
import Tradition from "../../images/carousel/18TraditionBack.jpg"
import Westhaven from "../../images/carousel/WesthavenDen.jpg"
import WesthavenDrone from "../../images/carousel/WesthavenDrone.jpg"
import WesthavenArches from "../../images/carousel/WesthavenArches.jpg"
import Piano from "../../images/carousel/PostRoadPiano.jpg"
import Stanfield from "../../images/carousel/StanfieldFrontPorch.jpg"
import Lake from "../../images/carousel/LakeHarbor.jpg"

import "./Home.css"

export default function CarouselSlider() {
    return (
        <div>
            <Carousel dynamicHeight={true} interval={2500} transitionTime={800} infiniteLoop autoPlay showThumbs={false}>
                <div>
                    <img className="carousel-image" src={ValleVerde} alt="house1" />
                </div>
                <div>
                    <img className="carousel-image" src={Bathroom} alt="house1" />
                </div>
                <div>
                    <img className="carousel-image" src={Clarence1} alt="house2" />
                </div>
                <div>
                    <img className="carousel-image" src={Nottoway} alt="house1" />
                </div>
                <div>
                    <img className="carousel-image" src={Lysander} alt="suburbs" />
                </div>
                <div>
                    <img className="carousel-image" src={Tradition} alt="suburbs" />
                </div>
                <div>
                    <img className="carousel-image" src={Westhaven} alt="suburbs" />
                </div>
                <div>
                    <img className="carousel-image" src={WesthavenArches} alt="suburbs" />
                </div>
                <div>
                    <img className="carousel-image" src={Piano} alt="suburbs" />
                </div>
                <div>
                    <img className="carousel-image" src={WesthavenDrone} alt="suburbs" />
                </div>
                <div>
                    <img className="carousel-image" src={Stanfield} alt="suburbs" />
                </div>
                <div>
                    <img className="carousel-image" src={Lake} alt="suburbs" />
                </div>
                <div>
                    <img className="carousel-image" src={GrannyWhite} alt="suburbs" />
                </div>
            </Carousel>
        </div>
    )
}