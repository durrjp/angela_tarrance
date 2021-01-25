import React, { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ValleVerde from "../../images/carousel/1641ValleVerdeStreet.jpg"
import Bathroom from "../../images/carousel/1641ValleVerdeBathroom.jpg"
import Clarence1 from "../../images/carousel/4304ClarenceOutside.jpg"
import PrinceCeiling from "../../images/carousel/PrinceValiantCeiling.jpg"
import GrannyWhite from "../../images/carousel/5444GrannyWhiteBack.jpg"
import Nottoway from "../../images/carousel/NottowayFireplace.jpg"
import Tradition from "../../images/carousel/18TraditionBack.jpg"
import Westhaven from "../../images/carousel/WesthavenDen.jpg"
import WesthavenDrone from "../../images/carousel/WesthavenDrone.jpg"
import WesthavenArches from "../../images/carousel/WesthavenArches.jpg"
import Piano from "../../images/carousel/PostRoadPiano.jpg"
import Stanfield from "../../images/carousel/StanfieldFrontPorch.jpg"
import Lake from "../../images/carousel/LakeHarbor.jpg"
import ChasePoint from "../../images/carousel/ChasePoint.jpg"
import Ravello from "../../images/carousel/RavelloWine.jpg"
import GrannyWhiteFront from "../../images/carousel/GrannyWhiteFrontDoor.jpg"
import GrannyWhiteChand from "../../images/carousel/GrannyWhiteChand.jpg"
import GrannyWhiteFence from "../../images/carousel/GrannyWhiteFence.jpg"
import GrannyWhitePool from "../../images/carousel/GrannyWhitePool.jpg"
import LysanderStairs from "../../images/carousel/LysanderStairs.jpg"
import LysanderChand from "../../images/carousel/LysanderChand.jpg"
import DougHill from "../../images/carousel/DougHillBirdHouse.jpg"
import GovStairs from "../../images/carousel/33GovernorsStairs.jpg"
import GovDrone from "../../images/carousel/33GovernorsDrone.jpg"
import GovStudy from "../../images/carousel/33GovernorsStudy.jpg"
import McEwen from "../../images/carousel/3631McEwenBack.jpg"
import ClarenceMurphyEntry from "../../images/carousel/ClarenceMurphyEntrance.jpg"
import ClarenceMurphyBarn from "../../images/carousel/ClarenceMurphyBarn.jpg"
import ClarenceMurphyPool from "../../images/carousel/ClarenceMurphyPool.jpg"
import ClarenceMurphyDrone from "../../images/carousel/ClarenceMurphyDrone.jpg"
import AvalonEntrance from "../../images/carousel/AvalonEntrance.jpg"
import GovernorsLibrary from "../../images/carousel/45GovernorsLibrary.jpg"
import GovernorsDining from "../../images/carousel/45GovernorsDining.jpg"
import GovernorsFrontDoor from "../../images/carousel/45GovernorsFrontDoor.jpg"
import GovernorsFlowers from "../../images/carousel/45GovernorsFlowers.jpg"
import GovernorsPool from "../../images/carousel/45GovernorsPool.jpg"
import GovernorsGolf from "../../images/carousel/45GovernorsGolf.jpg"
import WaylandBourbon from "../../images/carousel/WaylandBourbon.jpg"
import CarmelBack from "../../images/carousel/14CarmelBack.jpg"
import CarmelFountain from "../../images/carousel/14CarmelFountain.jpg"
import CarmelPiano from "../../images/carousel/14CarmelPiano.jpg"
import CarmelWine from "../../images/carousel/14CarmelWine.jpg"
import "./Home.css"

export default function CarouselSlider() {

    const [width, setWidth] = useState();

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {

    })

    window.addEventListener('resize', handleResize)

    if (width < '400px') {

        return (
            <div>
                <Carousel renderIndicator={false} dynamicHeight={true} fade={true} interval={3500} transitionTime={1000} infiniteLoop autoPlay showThumbs={false}>
                    <div>
                        <img className="carousel-image" src={GrannyWhite} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={ValleVerde} alt="house1" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={Bathroom} alt="house1" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={Clarence1} alt="house2" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={McEwen} alt="house2" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={GovernorsDining} alt="house2" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={Nottoway} alt="house1" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={CarmelBack} alt="house1" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={CarmelFountain} alt="house1" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={CarmelPiano} alt="house1" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={CarmelWine} alt="house1" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={PrinceCeiling} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={ClarenceMurphyEntry} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={GovernorsLibrary} alt="house2" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={GovernorsPool} alt="house2" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={GovernorsGolf} alt="house2" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={Tradition} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={Westhaven} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={AvalonEntrance} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={GovernorsFlowers} alt="house2" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={WesthavenArches} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={Piano} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={ClarenceMurphyBarn} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={GovernorsFrontDoor} alt="house2" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={WesthavenDrone} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={LysanderChand} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={Stanfield} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={GovStudy} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={ChasePoint} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={Ravello} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={DougHill} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={GrannyWhiteFront} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={LysanderStairs} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={GrannyWhitePool} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={GovStairs} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={GrannyWhiteFence} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={ClarenceMurphyPool} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={GrannyWhiteChand} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={Lake} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={WaylandBourbon} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={ClarenceMurphyDrone} alt="suburbs" />
                    </div>
                    <div className="mobile-carousel">
                        <img className="carousel-image" src={GovDrone} alt="suburbs" />
                    </div>
                    
                </Carousel>
            </div>
        )
    } else {
        return (
            <div>
                <Carousel renderIndicator={false} dynamicHeight={true} fade={true} interval={3500} transitionTime={1000} infiniteLoop autoPlay showThumbs={false}>
                    <div>
                        <img className="carousel-image" src={GrannyWhite} alt="suburbs" />
                    </div>
                </Carousel>
            </div>
        )
    }

}