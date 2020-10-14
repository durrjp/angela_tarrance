import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Card, CardImg, CardTitle, Collapse, Row } from "reactstrap"
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

    const handleTestimonialClick = () => {
        history.push(`/testimonials`);
    }

    return (
        <>
            <div className="carousel-overlay">
                <p className="carousel-title">Angela Tarrance</p>
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
                            <p style={{textAlign: "left"}}>Angela is the Director of Luxury Home Sales for 
                                 <a className="ashton-link" target="_blank" href="https://www.remax.com/real-estate-teams/the-ashton-real-estate-group-nashville-tn/101892914"> The Ashton Real Estate Group </a>
                                  in downtown Nashville TN.
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
                <div className="people-are-talking">
                    <div className="snippets-container">
                        <h1>Why work with Angela?</h1>
                        <div className="snippet-item">''Delivered on all promises''</div>
                        <div className="snippet-item">''helped me save over $10,000''</div>
                        <div className="snippet-item">''knowledgeable, professional, and fun to be with''</div>
                    <Button onClick={e => {
                            e.preventDefault()
                            handleTestimonialClick()
                        } } className="readmore-button">Read More</Button>
                    </div>
                </div>
            </div>
            <div className="whynashville-container">
                <div className="whynashville-text-container">
                    <div className="centered-title">
                        <h1>Why Nashville?</h1>
                    </div>
                    <p>Why are hundreds of professionals and families moving to Nashville each year? Here are a few of the reasons why.</p>
                    <h2 className="whynashville-titles">Affordability</h2>
                    <p>Being in Tennessee, Nashville boasts one of the lowest cost of living in the country in regards to property taxes. 
                    The influx of residents means more expansion into suburbs and many properties being available for buyers in all
                    price ranges.
                    </p>
                    <h2 className="whynashville-titles">Industry</h2>
                    <p>Nashville has become the hub for many large industries: entertainment, healthcare, and IT to name a few... Many companies
                        are moving to Nashville due to the low cost of living and potential for growth.
                    </p>
                    <h2 className="whynashville-titles">Fun</h2>
                    <p>It's no secret Nashville is one of the greatest destinations in the United States for it's world famous Broadway and live-music.
                        Nashville is also home to a variety of breweries and other activities to keep visitors coming back for more.
                    </p>
                    <h2 className="whynashville-titles">Community</h2>
                    <p>Nashville is no stranger to hardship from the 100 year flood in 2010 to the devastating tornadoes in 2019. However, Nashville,
                        is a community that comes together during hard times to support one another and build a better city.
                    </p>
                </div>
            </div>
            <div className="communities-section-container">
                <div className="communities-title">
                    <h1>Nashville Communities</h1>
                </div>
                <Fade up>
                    <div className="communities">
                        <div className="community-item">
                            <a href="http://www.arringtonvineyards.com/" target="_blank"><div className="community Arrington" /></a>
                            <p className="community-title">Arrington</p>
                        </div>
                        <div className="community-item">
                            <a href="https://www.tnvacation.com/middle-tennessee/brentwood" target="_blank"><div className="community Brentwood" /></a>
                            <p className="community-title">Brentwood</p>
                        </div>
                        <div className="community-item">
                            <a href="https://www.zillow.com/college-grove-tn/" target="_blank"><div className="community CollegeGrove" /></a>
                            <p className="community-title">College Grove</p>
                        </div>
                        <div className="community-item">
                            <a href="https://visitfranklin.com/" target="_blank"><div className="community Franklin" /></a>
                            <p className="community-title">Franklin</p>
                        </div>
                        <div className="community-item">
                            <a href="https://www.mtjuliet-tn.gov/" target="_blank"><div className="community MountJuliet" /></a>
                            <p className="community-title">Mount Juliet</p>
                        </div>
                        <div className="community-item">
                            <a href="https://www.murfreesborotn.gov/" target="_blank"><div className="community Murfreesboro" /></a>
                            <p className="community-title">Murfreesboro</p>
                        </div>
                        <div className="community-item">
                            <a href="https://www.visitmusiccity.com/" target="_blank"><div className="community Nashville" /></a>
                            <p className="community-title">Nashville</p>
                        </div>
                        <div className="community-item">
                            <a href="https://www.nolensvilletn.gov/" target="_blank"><div className="community Nolensville" /></a>
                            <p className="community-title">Nolensville</p>
                        </div>
                        <div className="community-item">
                            <a href="https://www.springhilltn.org/" target="_blank"><div className="community SpringHill" /></a>
                            <p className="community-title">Spring Hill</p>
                        </div>
                        <div className="community-item">
                            <a href="https://www.thompsons-station.com/" target="_blank"><div className="community ThompsonStation" /></a>
                            <p className="community-title">Thompson Station</p>
                        </div>
                    </div>
                </Fade>
            </div>
            <Footer />
        </>
    )
}