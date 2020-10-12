import React from "react"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import "./Angela.css"

export default function Angela() {
    return (
        <>
            <Header />
            <div className="angela-container">\
            <div className="angela-profiletext-container">
                            <h1>Angela Tarrance</h1>
                            <p style={{textAlign: "left"}}>
                            Angela is a native of South Carolina and pursued her real estate license after a successful career with
                             an International Fortune 50 Company. During her adult life, she has navigated multiple state to state
                              relocations and truly understands the personal experience of buying and selling property. Upon moving to
                               Nashville in 2010, Angela immediately fell in love with the local lifestyle and community and jumped into
                                the real estate realm and has not looked back.  As the Nashville market has been on fire so has Angela’s
                                 success.  She was the number one agent of the 150 agents in her brokerage in both 2017 and 2019 and has
                                  $100M in career sales.
                            </p>
                            <p style={{textAlign: "left"}}>
                            Angela is the Director of Luxury Home Sales for <a className="ashton-link" target="_blank" href="https://www.remax.com/real-estate-teams/the-ashton-real-estate-group-nashville-tn/101892914">The Ashton Real Estate Group of RE/MAX Advantage</a> and attributes
                             much of her success to the opportunities afforded her by the brokerage.  She says her office is a team
                              environment where everyone works together to ensure the success of all. Angela teaches classes on selling
                               luxury homes and mentors new agents where she finds joy in their development.
                            </p>
                            <p style={{textAlign: "left"}}>
                            On a personal level, Angela enjoys traveling, tennis and spending time with her husband and their six children.
                              She has been involved in many charitable organizations throughout her life including serving on multiple Board
                               of Directors for organizations like the Alzheimer’s Association and Palmetto Place which is a home for abused
                                children. Year after year she is a “Miracle Agent” donating thousands of dollars to Children’s Miracle
                                 network whose funds go directly to Vanderbilt Children’s Hospital. Between a successful real estate career
                                 , a giving heart and being a wife and mom, Angela is busy lady!
                            </p>

                        </div>
            </div>

            <Footer />
        </>

    )
}