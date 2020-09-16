import React from "react"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import "./Recognition.css"

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
                    </div>
                    <div className="awards-container">
                        <h3>Awards</h3>
                        <ul>
                            <li>2019 - Platinum Club Award Winner</li>
                            <li>2018 - RE/MAX Hall of Fame Inductee</li>
                            <li>2018 - Platinum Club Award Winner</li>
                            <li>2017 - Platinum Club Award Winner</li>
                            <li>2016 - Platinum Club Award Winner</li>
                            <li>2015 - Platinum Club Award Winner</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}