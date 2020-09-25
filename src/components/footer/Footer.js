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
                        <p className="footer-subitem">
                            <a href="https://www.facebook.com/AngelaDurrREMAX/" target="_blank">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M37.1152 0H2.88483C1.2915 0 0 1.2915 0 2.88483V37.1152C0 38.7085 1.2915 40 2.88483 40H21.3672V24.5312H16.1719V18.4766H21.3672V14.0207C21.3672 8.85345 24.5218 6.04095 29.1312 6.04095C31.3388 6.04095 33.2361 6.20544 33.7891 6.27899V11.6797H30.6107C28.1027 11.6797 27.6172 12.8714 27.6172 14.6204V18.4766H33.6133L32.832 24.5312H27.6172V40H37.1152C38.7085 40 40 38.7085 40 37.1152V2.88483C40 1.2915 38.7085 0 37.1152 0V0Z" fill="url(#paint0_linear)"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#FED3CD"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<clipPath id="clip0">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>


                            </a>
                        </p>
                        <p className="footer-subitem">
                            <a href="https://www.instagram.com/angeladurrtarrance/" target="_blank">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.5 0H12.5C5.5975 0 0 5.5975 0 12.5V27.5C0 34.4025 5.5975 40 12.5 40H27.5C34.4025 40 40 34.4025 40 27.5V12.5C40 5.5975 34.4025 0 27.5 0ZM36.25 27.5C36.25 32.325 32.325 36.25 27.5 36.25H12.5C7.675 36.25 3.75 32.325 3.75 27.5V12.5C3.75 7.675 7.675 3.75 12.5 3.75H27.5C32.325 3.75 36.25 7.675 36.25 12.5V27.5Z" fill="white"/>
                                <path d="M20 10C14.4775 10 10 14.4775 10 20C10 25.5225 14.4775 30 20 30C25.5225 30 30 25.5225 30 20C30 14.4775 25.5225 10 20 10ZM20 26.25C16.555 26.25 13.75 23.445 13.75 20C13.75 16.5525 16.555 13.75 20 13.75C23.445 13.75 26.25 16.5525 26.25 20C26.25 23.445 23.445 26.25 20 26.25Z" fill="white"/>
                                <path d="M30.75 10.5825C31.4859 10.5825 32.0825 9.98592 32.0825 9.25001C32.0825 8.51409 31.4859 7.91751 30.75 7.91751C30.0141 7.91751 29.4175 8.51409 29.4175 9.25001C29.4175 9.98592 30.0141 10.5825 30.75 10.5825Z" fill="white"/>
                                </svg>
                            </a>
                        </p>
                        <p className="footer-subitem">
                            <a href="https://www.linkedin.com/in/angela-durr-tarrance-a882bb6b/" target="_blank">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0V40H40V0H0ZM12.2827 32.9987C12.2827 33.5081 11.8697 33.9211 11.3603 33.9211H7.43509C6.92566 33.9211 6.5127 33.5081 6.5127 32.9987V16.2534C6.5127 15.744 6.92566 15.3311 7.43509 15.3311H11.3603C11.8697 15.3311 12.2827 15.744 12.2827 16.2534V32.9987ZM9.39133 12.7699C7.60888 12.806 6.04242 11.3172 6.04278 9.4181C6.04278 7.57622 7.55964 6.07358 9.41389 6.07508C11.2459 6.07657 12.7569 7.58974 12.753 9.43091C12.7486 11.3587 11.1487 12.8119 9.39133 12.7699ZM33.9572 33.542C33.9572 33.7535 33.7857 33.9249 33.5742 33.9248L28.5579 33.9236C28.3465 33.9235 28.175 33.7521 28.175 33.5407V23.2006C28.175 22.3068 27.8129 21.4972 27.2269 20.9116C26.6333 20.3176 25.8095 19.9535 24.9009 19.9638C23.121 19.9839 21.7013 21.4619 21.7013 23.2419V33.5394C21.7013 33.751 21.5298 33.9224 21.3183 33.9223L16.3144 33.9211C16.1029 33.921 15.9316 33.7496 15.9316 33.5382V15.714C15.9316 15.5026 16.103 15.3311 16.3145 15.3311H21.2117C21.4232 15.3311 21.5947 15.5025 21.5947 15.714V17.7694C21.5951 17.7686 21.6144 17.771 21.6472 17.776C21.7419 17.6049 21.8449 17.4391 21.9562 17.2794C22.9768 15.8147 24.6736 14.8564 26.5942 14.8564H27.6009C31.1114 14.8564 33.9573 17.7022 33.9573 21.2128V33.542H33.9572Z" fill="white"/>
                                </svg>
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
        </>
    )
}