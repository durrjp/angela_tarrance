import React from "react"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import "./Recognition.css"

export default function Recognition() {
    return (
        <>
            <Header />
            <div className="recognition-page-container">
                <div className="recognitiontop-background">
                    <h4 className="featuredhomes-title">Recognition</h4>
                </div>
                <div>
                    <h3>In the Media</h3>
                    <h3>Awards</h3>
                </div>
            </div>
            <Footer />
        </>
    )
}