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
            <Footer />
        </>
    )
}