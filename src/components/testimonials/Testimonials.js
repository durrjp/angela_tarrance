import React from "react"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import "./Testimonials.css"
import Fade from 'react-reveal/Fade';
import Iframe from 'react-iframe'
import { Button } from "reactstrap";

export default function Testimonials() {
    return (
        <>
        <Header />
        <div className="testimonial-page-container">
            <div className="testimonialtop-background">
                <h4 className="featuredhomes-title">Testimonials</h4>
            </div>
            <div className="testimonials-container">
                <div className="angelapic-container">
                        <Fade bottom>
                            <div className="angela-image-container2" />
                        </Fade>
                        <div className="externalreviews-container">
                            <div className="zillow-container">
                                <h2>Zillow Reviews (&#9733;&#9733;&#9733;&#9733;&#9733;)</h2>
                                <a href="https://www.zillow.com/profile/AngelaTarrance/" target="_blank" className="zillow-button">Open Zillow</a>
                            </div>
                            <div className="zillow-container">
                                <h2>Facebook Reviews (&#9733;&#9733;&#9733;&#9733;&#9733;)</h2>
                                <a href="https://www.facebook.com/AngelaDurrREMAX/reviews/" target="_blank" className="zillow-button">Open Facebook</a>
                            </div>
                        </div>
                </div>
                <div className="text-container">
                    <Fade up>
                        <div className="testimonial-item">
                            <p className="testimonial-text">"Angela came highly recommended and <span className="callout">delivered on all promises</span>. We were able to 
                            find what we were looking for within a short time. She went above 
                            and beyond to ensure we understood the process and addressed all matters that came
                            up with a sense of urgency."
                            </p>
                            <div className="gradient-border testimonial-author">
                                <span className="testimonial-giver">Stacey Elaine</span>
                            </div>
                        </div>
                    </Fade>
                    <Fade up>
                        <div className="testimonial-item">
                            <p className="testimonial-text">"Angela has been the best real estate agent I have ever worked with. She is immaculately
                            thorough with all the details, follow-up and negotiations.... In fact, she  <span className="callout">helped me save over 
                            $10,000</span>. She came to me highly recommended and I will gladly pass the same recommendations along
                            to others."
                            </p>
                            <div className="gradient-border testimonial-author">
                                <span className="testimonial-giver">Miles</span>
                            </div>
                        </div>
                    </Fade>
                    <Fade up>
                        <div className="testimonial-item">
                            <p className="testimonial-text">"Our home buying experience was extremely smooth and successful due in large part to Angela’s assistance.
                            My husband and I presented many challenges for Angela: (1) we were relocating from Florida, (2) we had a
                            home in Florida we still needed to sell, and (3) we had very specific floorplan requests. Angela met the
                            challenge head on. She was <span className="callout">prepared, attentive, knowledgeable, professional, and fun to be with</span>. She always
                            had our best interest in mind and went above and beyond to ensure we were pleased. Even after closing,
                            Angela contacted us to make sure everything was going well. I would recommend Angela to all of my friends."
                            </p>
                            <div className="gradient-border testimonial-author">
                                <span className="testimonial-giver">Valerie Stewart</span>
                            </div>
                        </div>
                    </Fade>
                    <Fade up>
                        <div className="testimonial-item">
                            <p className="testimonial-text">"Angela is one of the most detailed agents I know. She was not pushy, a very good listener and worked
                            behind the scenes to meet my expectations. She was on top of every step, negotiating with the other agent,
                            and making all the arrangements for the inspection and closing. She kept me informed all along the way, her
                            follow through was awesome. She was a delight to work with and I give her the highest ratings possible for her professional skills.
                            I have purchased six houses over a 50 year period, and she is <span className="callout">by far the best agent I have ever worked with</span>."
                            </p>
                            <div className="gradient-border testimonial-author">
                                <span className="testimonial-giver">Jim Dick</span>
                            </div>
                        </div>
                    </Fade>
                    <Fade up>
                        <div className="testimonial-item">
                            <p className="testimonial-text">"I cannot imagine closing the deal we had together with anyone other than you! Through every difficult hurdle
                            (and thats being gentle) you left me walking away with a smile. I had no doubts that we would be able to get to
                            the closing table with you working the other side! I never once dreaded having to call you- even giving the
                            frustrating circumstances! Your <span className="callout">positive attitude and constant communication</span> with all of us was more than a joy
                            to experience! I am so thankful to call you a fellow agent and I know everyone that works with you (agent or client)
                            will have an amazing experience. You are an awesome ambassador for the Realtor profession!
                            I can't wait to close another deal with you! Best of luck!" -Taylore Massa, Weichert Realtors
                            </p>
                            <div className="gradient-border testimonial-author">
                                <span className="testimonial-giver">The Andrews Group</span>
                            </div>
                        </div>
                    </Fade>
                    <Fade up>
                        <div className="testimonial-item">
                            <p className="testimonial-text">"I worked together with Angela Durr Tarrance and her clients on the sale of a to-be-built home in the Brentwood
                            area and found her level of service toward myself and her clients as top-notch. During the construction of new
                            homes, many agents only seem to show up for the closing, but Angela was present at all required and optional meetings,
                            frequently reached out for updates, and truly <span className="callout">kept her client's best interest in mind</span> throughout the lengthy build
                            process. They were a relocation buyer, and her area knowledge helped them make comfortable, confident decisions.
                            She advised them on the proper locations as it pertained to their needs in a new and unfamiliar city. Hopefully
                            we can work together again! Thanks, Angela!"
                            </p>
                            <div className="gradient-border testimonial-author">
                                <span className="testimonial-giver">Jay Staler, Fox Ridge Homes</span>
                            </div>
                        </div>
                    </Fade>
                    <Fade up>
                        <div className="testimonial-item">
                            <p className="testimonial-text">"Angela was very helpful through the entire process of buying our home! We needed a home quickly and had a limited
                            time to look; she <span className="callout">found us houses quickly</span> and worked around our schedule. Also, she answered any and all questions
                            we had in a timely manner. We were very happy with Angela as our realtor!"
                            </p>
                            <div className="gradient-border testimonial-author">
                                <span className="testimonial-giver">Brittany Lemus</span>
                            </div>
                        </div>
                    </Fade>
                    <Fade up>
                        <div className="testimonial-item">
                            <p className="testimonial-text">"Angela is one of the most diligent hard working real estate agents I have ever had the pleasure of working with on
                            buying and selling a home. She went above and beyond and exceeded all our expectations. She was very thorough in getting
                            information to us and we never had to wait on anything. She made the process of selling our home as painless as possible
                            even through the most frustrating times. She always had our best interest in mind.
                            I cannot imagine working with anyone else and getting the <span className="callout">service and devotion</span> that we experienced
                            with Angela."
                            </p>
                            <div className="gradient-border testimonial-author">
                                <span className="testimonial-giver">Cindy Bullock</span>
                            </div>
                        </div>
                    </Fade>
                </div>
                
            </div>
        </div>
        <Footer />
        </>
    )
}