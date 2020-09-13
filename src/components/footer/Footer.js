import React from "react"
import "./Footer.css"

export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <h4 className="footer-title">Angela Durr Tarrance</h4>
                <div className="contact-container">
                    <p className="footer-subitem">615 627-8779</p>
                    <p className="footer-subitem">angelahdurr@aol.com</p>
                </div>
                <div className="social-container">
                    <p className="footer-subitem">Facebook</p>
                    <p className="footer-subitem">Instagram</p>
                    <p className="footer-subitem">LinkedIn</p>
                </div>
                <div className="remax-logo-container">
                    <div className="remax-logo" />
                </div>
            </div>
        </>
    )
}