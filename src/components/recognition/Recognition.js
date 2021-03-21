import React from "react"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import "./Recognition.css"
import HallOfFame from "../../images/awards/2017_RM_HallofFame_outlines.png"
import Platinum from "../../images/awards/Platinum.png"
import OneHundred from "../../images/awards/100_Percent.png"
import CLHMSGuild from "../../images/awards/CLHMSGuildLogo.png"
import RealProducers from "../../images/awards/NashvilleRealProducersLogo.png"
import NashvilleLifestyle from "../../images/awards/NashvilleLifestylesLogo.png"
import RealProducersPDF from "../../images/NashvilleRealProducersMag.pdf"
import SRES from "../../images/SRESLogo.jpg"
import CMN from "../../images/CMNLogo.jpg"
import CRS from "../../images/CRSDesignation.png"
import ABR from "../../images/ABRDesignation.jpg"
import SOAR from "../../images/awards/SOAR_Award_2020.png"
// import Chairman from "../../images/awards/Chairmans_Logo.jpg"
import { Button } from "reactstrap"
import fullMag from "../../images/angela/AngelaTarrancePromoCover.pdf"
import Chairman from "../../images/awards/Chairmans.png"
import ABC from "../../images/awards/abovethecrowd2.png"

export default function Recognition() {
    return (
        <>
            <Header />
            <div className="recognitiontop-background">
                <h4 className="recognition-title">Recognition</h4>
            </div>
            <div className="recognition-page-container">
                <div className="recognitionbottom-container">
                    <p className="media-title"><span className="media-bold">Angela</span> in the media...</p>
                    <div className="media-container">
                        <div className="media-div">
                            <div className="mediatext-div">
                                <p className="media-div-text">2020 Year - Angela was awarded with the SOAR Award - Top Agent Badge</p>
                                <a href="https://issuu.com/soarnashville/docs/soar_awards_layout_pages_-_final?fr=sYmVlMjI4Njg1MzE" target="_blank" download>
                                    <Button>
                                        Read
                                    </Button>
                                </a>
                            </div>
                            <img className="media-div-img soar-award" src={SOAR} alt="SOAR Award - Top Agent" />
                        </div>
                        <div className="media-div">
                            <div className="mediatext-div">
                                <p className="media-div-text">November 2020 - Angela was featured in Nashville Lifestyles Magazine</p>
                                <a href={fullMag} download>
                                    <Button>
                                        Read
                                    </Button>
                                </a>
                            </div>
                            <img className="media-div-img" src={NashvilleLifestyle} alt="Nashville Lifestyles Logo" />
                        </div>
                        <div className="media-div">
                            <div className="mediatext-div">
                                <p className="media-div-text">July 2017 - Angela was featured in Nashville Real Producers Magazine</p>
                                <a href={RealProducersPDF} download>
                                    <Button>
                                        Read
                                    </Button>
                                </a>
                            </div>
                            <img className="media-div-img" src={RealProducers} alt="Nashville Real Producers Logo" />
                        </div>
                    </div>
                    <div className="gradient-border-media" />
                    <div className="designations-container">
                        <p className="awards-title">Designations</p>
                        <div className="designations-items">
                            <img className="designation-item" width="220" height="224" src={CRS}/>
                            <img className="designation-item" width="220" height="224" src={CLHMSGuild}/>
                            <img className="designation-item" width="450" height="224" src={SRES}/>
                            <img className="designation-item" width="500" height="224" src={ABR}/>
                        </div>

                    </div>
                    <div className="gradient-border-media" />
                    <div className="awards-container">
                        <p className="awards-title">RE/MAX Awards</p>
                        <div className="halloffame-container">
                            <div className="hof-item">
                                <p className="hof-text">RE/MAX Hall of Fame Recipient</p>
                                <img width="178" height="224" src={HallOfFame}/>
                            </div>
                            <div className="hof-item">
                                <p className="hof-text">RE/MAX Miracle Agent</p>
                                <img width="500" height="224" src={CMN}/>
                            </div>
                            <div className="hof-item">
                                <p className="hof-text">RE/MAX Above the Crowd</p>
                                <img width="300" height="350" src={ABC}/>
                            </div>
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
                            <div className="yearaward-item">
                                <p>2020</p>
                                <img width="210"  src={Chairman} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}