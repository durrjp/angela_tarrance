import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Collapse } from "reactstrap"
import ContactMeForm from "../contactme/ContactMeForm"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import CarouselSlider from "./CarouselSlider"
import Fade from 'react-reveal/Fade';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const history = useHistory();

    const handleClick = () => {
        history.push(`/angela`);
    }

    return (
        <>
            <div className="carousel-overlay">
                <p className="carousel-title">ANGELA TARRANCE</p>
                <div className="carousel-details">
                    <p>Best Service</p>
                    <p>Nashville Luxury Homes</p>
                    <p>Mother</p>
                </div>
            </div>
            <Header />
            <CarouselSlider />
            <div className="personal-profile-container">
                <div className="pp-top-container">
                    <Fade left>
                        <div className="angela-img-container" />
                    </Fade>
                    <Fade up>
                        <div className="angela-profiletext-container">
                            <h1>Angela Tarrance</h1>
                            <p style={{textAlign: "left"}}>Angela is the Director of Luxury Home Sales for RE/MAX Advantage in downtown Nashville TN.
                                She helps clients of all price points but specializes in the luxury market. She comes to real
                                estate with a background in corporate finance with a Fortune 50 company and uses her
                                business acumen to negotiate the best deal for her buyers and sellers. Angela is enthusiastic
                                and in constant communication with her buyer and sellers to insure they are well represented.
                            </p>
                            <Button onClick={e => {
                                e.preventDefault()
                                handleClick()
                            } } className="learnmore-button">Learn More</Button>

                        </div>
                    </Fade>
                </div>
            </div>
            <div className="communities-section-container">
                <div className="communities-title">
                    <h1>Nashville Communites</h1>
                </div>
                <div className="communities">
                    <div className="community-item">
                        <div className="community Arrington" />
                        <p className="community-title">Arrington</p>
                    </div>
                    <div className="community-item">
                        <div className="community Brentwood" />
                        <p className="community-title">Brentwood</p>
                    </div>
                    <div className="community-item">
                        <div className="community CollegeGrove" />
                        <p className="community-title">College Grove</p>
                    </div>
                    <div className="community-item">
                        <div className="community Franklin" />
                        <p className="community-title">Franklin</p>
                    </div>
                    <div className="community-item">
                        <div className="community MountJuliet" />
                        <p className="community-title">Mount Juliet</p>
                    </div>
                    <div className="community-item">
                        <div className="community Murfreesboro" />
                        <p className="community-title">Murfreesboro</p>
                    </div>
                    <div className="community-item">
                        <div className="community Nashville" />
                        <p className="community-title">Nashville</p>
                    </div>
                    <div className="community-item">
                        <div className="community Nolensville" />
                        <p className="community-title">Nolensville</p>
                    </div>
                    <div className="community-item">
                        <div className="community SpringHill" />
                        <p className="community-title">Spring Hill</p>
                    </div>
                    <div className="community-item">
                        <div className="community ThompsonStation" />
                        <p className="community-title">Thompson Station</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}