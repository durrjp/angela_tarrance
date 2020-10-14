import React from "react"
import ContactMeForm from "../contactme/ContactMeForm"
import "./Footer.css"
import Facebook from "../../images/icons/FlyBirdsBox_RoseGold_Icons-facebook.png"
import Instagram from "../../images/icons/FlyBirdsBox_RoseGold_Icons-instagram.png"
import LinkedIn from "../../images/icons/FlyBirdsBox_RoseGold_Icons-linkedin.png"
import Youtube from "../../images/icons/FlyBirdsBox_RoseGold_Icons-youtube.png"
import Mail from "../../images/icons/FlyBirdsBox_RoseGold_Icons-mail.png"
import Phone from "../../images/icons/FlyBirdsBox_RoseGold_Icons-phone.png"

export default function Footer() {
    return (
        <>
        <div>
            <div className="gradient-border" />
            <div className="footer-container">
                <div className="footer-leftcontainer">
                    <h2 className="footer-title">Angela Tarrance | Director of Luxury Home Sales</h2>
                    <h4>CHLMS, CRS, ABR, SRES</h4>
                    <div className="contact-container">
                        <div className="contact-item">
                            <p className="contact-item-p">Cell: 615 627-6927</p>
                            <img width="40px" height="40px" src={Phone} />
                        </div>
                        <div className="contact-item">
                            <p className="contact-item-p">Office: 615 301-1650</p>
                            <img width="40px" height="40px" src={Phone} />
                        </div>
                        <div className="contact-item">
                            <p className="contact-item-p">angelatarrancehomes@gmail.com</p>
                            <img width="40px" height="40px" src={Mail} />
                        </div>
                    </div>
                    <div className="social-container">
                        <p className="footer-subitem">
                            <a href="https://www.facebook.com/AngelaDurrREMAX/" target="_blank">
                            <img width="45" height="55" src={Facebook} alt="Facebook logo" />
                            </a>
                        </p>
                        <p className="footer-subitem">
                            <a href="https://www.instagram.com/angeladurrtarrance/" target="_blank">
                            <img width="53" height="64" src={Instagram} alt="Instagram logo" />
                            </a>
                        </p>
                        <p className="footer-subitem">
                            <a href="https://www.linkedin.com/in/angela-durr-tarrance-a882bb6b/" target="_blank">
                            <img width="50" height="59" src={LinkedIn} alt="LinkedIn logo" />
                            </a>
                        </p>
                        <p className="footer-subitem">
                            <a href="https://www.youtube.com/channel/UCV3P4DM_V_PAORhN042x6ZQ" target="_blank">
                            <img width="56" height="67" src={Youtube} alt="LinkedIn logo" />
                            </a>
                        </p>
                    </div>
                    <div className="remax-logo-container">
                        <div className="remax-logo" />
                    </div>
                </div>
                <div className="footer-rightcontainer">
                    <ContactMeForm />
                </div>
            </div>
        </div>
        </>
    )
}