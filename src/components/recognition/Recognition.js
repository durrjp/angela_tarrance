import React from "react"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import "./Recognition.css"
import HallOfFame from "../../images/awards/2017_RM_HallofFame_outlines.png"
import Platinum from "../../images/awards/Platinum.png"
import OneHundred from "../../images/awards/100_Percent.png"
import CLHMS from "../../images/awards/CLHMSSpecialistGold.png"
import CLHMSGuild from "../../images/awards/CLHMSGuildLogo.png"
import RealProducers from "../../images/awards/NashvilleRealProducersLogo.png"
import NashvilleLifestyle from "../../images/awards/NashvilleLifestylesLogo.png"
import RealProducersPDF from "../../images/NashvilleRealProducersMag.pdf"
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap"

export default function Recognition() {
    return (
        <>
            <Header />
            <div className="recognitiontop-background">
                <h4 className="featuredhomes-title">Recognition</h4>
            </div>
            <div className="recognition-page-container">
                <div className="recognitionbottom-container">
                    <div className="media-container">
                        <h3>Media</h3>
                        <div className="magazine-container">
                            <Card className="magazine-card">
                                <CardImg top width="100%" src={RealProducers} alt="Nashville Real Producers Logo" />
                                <CardBody>
                                    <CardTitle>
                                        July 2017 - Angela was featured in Nashville Real Producers Magazine
                                    </CardTitle>
                                    <CardText>
                                        <a href={RealProducersPDF} download>
                                            <Button>
                                                Read
                                            </Button>
                                        </a>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="magazine-card">
                                <CardImg top width="100%" src={NashvilleLifestyle} alt="Nashville Real Producers Logo" />
                                <CardBody>
                                    <CardTitle>
                                        November 2020 - Angela was featured in Nashville Lifestyles Magazine
                                    </CardTitle>
                                    <CardText>
                                        {/* <Button>
                                            Read
                                        </Button> */}
                                        Coming Soon!
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="awards-container">
                        <h3>Awards</h3>
                        <div className="halloffame-container">
                            <img width="220" height="224" src={CLHMS}/>
                            <img width="178" height="224" src={HallOfFame}/>
                            <img width="220" height="224" src={CLHMSGuild}/>
                        </div>
                        <div className="yearawards-container">
                            <div className="yearaward-item">
                                <p>2015</p>
                                <img width="210" height="110" src={OneHundred}/>
                            </div>
                            <div className="yearaward-item">
                                <p>2016</p>
                                <img width="210" height="110" src={Platinum}/>
                            </div>
                            <div className="yearaward-item">
                                <p>2017</p>
                                <img width="210" height="108" src={Platinum} />
                            </div>
                            <div className="yearaward-item">
                                <p>2018</p>
                                <img width="210" height="108" src={Platinum} />
                            </div>
                            <div className="yearaward-item">
                                <p>2019</p>
                                <img width="210" height="108" src={Platinum} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}