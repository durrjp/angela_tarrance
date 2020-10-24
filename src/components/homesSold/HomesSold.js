import React, { useContext, useEffect, useState } from "react"
import { Button, Card, CardBody, CardHeader, CardImg, CardText, CardTitle} from "reactstrap"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import "./HomesSold.css"
import { useHistory } from "react-router-dom"
import Fade from 'react-reveal/Fade';
import { HomeContext } from "../../providers/HomeProvider"
import { UserContext } from "../../providers/UserProvider"
import AddHomeForm from "./AddHomeForm"
import 'firebase/auth'
import 'firebase/storage'


export default function HomesSold() {
    const { getHomes, homes, setHomes} = useContext(HomeContext)
    const {isLoggedIn} = useContext(UserContext)
    const history = useHistory();
    const [modal, setModal] = useState(false)
    
    useEffect(() => {
        getHomes()
    },[])

    const toggle = () => {
        setModal(!modal)
    }

    const refreshHomes = () => {
        getHomes()
    }


    return (
        <>
        <Header />
        <div className="page-container">
            <div className="homestop-background">
                <h4 className="featuredhomes-title">Featured Homes Sold</h4>
            </div>
            {isLoggedIn ?
                <Button className="addhome-button" onClick={(e) => {
                    e.preventDefault()
                    toggle()
                }}>
                    Add Home
                </Button>
                : <div></div>
            }
            <Fade up>
                <div className="cards-container">
                    {
                        homes.map(home => {
                                return (
                                    <a className="homecard-link" target="_blank" href={home.SiteURL}>
                                        <Card className="home-card">
                                            <CardImg className="cardimgback" top width="100%" src={home.Image} alt="home picture" />
                                            <CardBody className="card-body">
                                                <CardTitle>
                                                    <p className="home-street">{home.Street}</p>
                                                    <p>{home.City}, {home.State}</p> 
                                                    <p>{home.Bedrooms} Bedrooms | {home.Bathrooms} Bathrooms | {home.SquareFeet} SQ ft</p>
                                                </CardTitle>
                                                <CardText style={{fontWeight: "bold"}}>${home.Price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</CardText>
                                            </CardBody>
                                        </Card>
                                    </a>
                                )
                        })
                    }
                </div>
            </Fade>
        </div>
        <Footer />
        <AddHomeForm toggle={toggle} modal={modal} refreshHomes={refreshHomes} />
        </>
    )
}