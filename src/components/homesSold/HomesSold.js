import React from "react"
import { Card, CardBody, CardColumns, CardImg, CardText, CardTitle} from "reactstrap"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import "./HomesSold.css"
import Home from "../../images/home1.jpg"
import Home2 from "../../images/home2.jpg"
import Home3 from "../../images/home3.jpg"
import { useHistory } from "react-router-dom"
import Fade from 'react-reveal/Fade';


export default function HomesSold() {
    const history = useHistory();
    return (
        <>
        <Header />
            <div className="page-container">
                <div className="homestop-background">
                    <h4 className="featuredhomes-title">Featured Homes</h4>
                </div>
                <Fade up>
                    <CardColumns className="cards-container">
                        <Card className="home-card">
                            <CardImg top width="100%" src={Home} alt="home picture" />
                            <CardBody className="card-body">
                                <CardTitle>
                                    <p>123 Old Hickory Blvd.</p>
                                    <p>Brentwood, TN</p> 
                                </CardTitle>
                                <CardText>$1,900,000</CardText>
                            </CardBody>
                        </Card>
                        <Card  className="home-card">
                            <CardImg top width="100%" src={Home3} alt="home picture" />
                            <CardBody className="card-body">
                                <CardTitle>
                                    <p>879 Hollow Tree Lane</p>
                                    <p>Franklin, TN</p> 
                                </CardTitle>
                                <CardText>$1,000,000</CardText>
                            </CardBody>
                        </Card>
                        <Card  className="home-card">
                            <CardImg top width="100%" src={Home2} alt="home picture" />
                            <CardBody className="card-body">
                                <CardTitle>
                                    <p>645 Wilted Flower Ct.</p>
                                    <p>Nashville, TN</p>
                                </CardTitle>
                                <CardText>$2,500,000</CardText>
                            </CardBody>
                        </Card>
                        <Card  className="home-card">
                            <CardImg top width="100%" src={Home} alt="home picture" />
                            <CardBody className="card-body">
                                <CardTitle>
                                    <p>123 Old Hickory Blvd.</p>
                                    <p>Brentwood, TN</p>
                                </CardTitle>
                                <CardText>$1,900,000</CardText>
                            </CardBody>
                        </Card>
                        <Card  className="home-card">
                            <CardImg top width="100%" src={Home3} alt="home picture" />
                            <CardBody className="card-body">
                                <CardTitle>
                                    <p>879 Hollow Tree Lane</p>
                                    <p>Franklin TN</p></CardTitle>
                                <CardText>$1,000,000</CardText>
                            </CardBody>
                        </Card>
                        <Card  className="home-card">
                            <CardImg top width="100%" src={Home2} alt="home picture" />
                            <CardBody className="card-body">
                                <CardTitle>
                                    <p>645 Wilted Flower Ct.</p>
                                    <p>Nashville, TN</p>
                                </CardTitle>
                                <CardText>$2,500,000</CardText>
                            </CardBody>
                        </Card>
                    </CardColumns>
                </Fade>
            </div>
        <Footer />
        </>
    )
}