import React from "react"
import ContactMeForm from "../contactme/ContactMeForm"
import "./Footer.css"

export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-leftcontainer">
                    <h2 className="footer-title">Angela Tarrance</h2>
                    <div className="contact-container">
                        <p className="footer-subitem">615 627-8779</p>
                        <p className="footer-subitem">angelahdurr@aol.com</p>
                    </div>
                    <div className="social-container">
                        <p className="footer-subitem"><a href="https://www.facebook.com/AngelaDurrREMAX/" target="_blank">Facebook</a></p>
                        <p className="footer-subitem"><a href="https://www.instagram.com/angeladurrtarrance/" target="_blank">Instagram</a></p>
                        <p className="footer-subitem"><a href="https://www.linkedin.com/in/angela-durr-tarrance-a882bb6b/" target="_blank">LinkedIn</a></p>
                    </div>
                    <div className="remax-logo-container">
                        <div className="remax-logo" />
                    </div>
                </div>
                <div className="footer-rightcontainer">
                    <ContactMeForm />
                </div>
            </div>
        </>
    )
}