import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, Spinner} from "reactstrap"

export default function HomeSold({home, homesLoading}) {
    debugger
    return homesLoading === false ? (
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
    : (
        <Card className="home-card">
            <Spinner />
        </Card>
    )
}