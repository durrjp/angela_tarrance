import React, { useContext, useEffect, useState } from "react"
import { Button, Card, CardBody, CardColumns, CardImg, CardText, CardTitle} from "reactstrap"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import "./HomesSold.css"
import Home from "../../images/home1.jpg"
import Home2 from "../../images/home2.jpg"
import Home3 from "../../images/home3.jpg"
import { useHistory } from "react-router-dom"
import Fade from 'react-reveal/Fade';
import { HomeContext } from "../../providers/HomeProvider"
import { UserContext } from "../../providers/UserProvider"
import AddHomeForm from "./AddHomeForm"


export default function HomesSold() {
    const { getHomes} = useContext(HomeContext)
    const {isLoggedIn} = useContext(UserContext)
    const [homes, setHomes] = useState([]);
    const history = useHistory();
    const [modal, setModal] = useState(false)
    useEffect(() => {
        getHomes().then(res => {
            setHomes(res)
        } )
    },[])

    const toggle = () => {
        setModal(!modal)
    }
    
    return (
        <>
        <Header />
        <div className="page-container">
            <div className="homestop-background">
                <h4 className="featuredhomes-title">Featured Homes</h4>
            </div>
            {isLoggedIn ?
                <Button onClick={(e) => {
                    e.preventDefault()
                    toggle()
                }}>
                    Add Home
                </Button>
                : <div></div>
            }
            <Fade up>
                <CardColumns className="cards-container">
                    {
                        homes.map(home => (
                            <Card className="home-card">
                                <CardImg top width="100%" src={Home} alt="home picture" />
                                <CardBody className="card-body">
                                    <CardTitle>
                                        <p>{home.Street}</p>
                                        <p>{home.City}, {home.State}</p> 
                                    </CardTitle>
                                    <CardText>${home.Price}</CardText>
                                </CardBody>
                            </Card>
                        ))
                    }
                </CardColumns>
            </Fade>
        </div>
        <Footer />
        <AddHomeForm toggle={toggle} modal={modal} />
        </>
    )
}