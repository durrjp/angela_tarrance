import React from "react"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import "./Angela.css"
import AlzAssoc from "../../images/alzheimers-association-vector-logo.svg"

export default function Angela() {
    return (
        <>
            <Header />
            <div className="angela-container">
                <div className="angela-family-container">
                    <h1>Family</h1>
                </div>
                <div className="angela-service-container">
                    <h1>Service</h1>
                    <div className="service-subcontainer1">
                        <div className="service-text">
                            <h3>Board of Directors</h3>
                            <p>
                                Angela is a service centered individual who loves to help people.
                                Angela is a service centered individual who loves to help people.
                                Angela is a service centered individual who loves to help people.
                                Angela is a service centered individual who loves to help people.
                                Angela is a service centered individual who loves to help people.
                                Angela is a service centered individual who loves to help people.
                                Angela is a service centered individual who loves to help people.
                                Wow she is so great, the best even!
                            </p>
                        </div>
                        <div>
                            {/* <img width="500px" height="200px" src={AlzAssoc} /> */}
                            <div className="alzassoc-image"/>
                        </div>
                    </div>
                </div>
                <div className="angela-fun-container">
                    <h1>Fun or ....</h1>
                </div>
            </div>

            <Footer />
        </>

    )
}