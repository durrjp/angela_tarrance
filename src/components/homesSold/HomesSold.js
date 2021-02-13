import React, { useContext, useEffect, useState } from "react"
import { Button } from "reactstrap"
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
import HomeSold from "./HomeSold"


export default function HomesSold() {
    const { getHomes, homesSold, setHomes, homesLoading, setHomesLoading} = useContext(HomeContext)
    const {isLoggedIn} = useContext(UserContext)
    const history = useHistory();
    const [modal, setModal] = useState(false)
    
    useEffect(() => {
        getHomes().then(response => setHomes(response));
    },[])

    const toggle = () => {
        setModal(!modal);
    }

    const refreshHomes = () => {
        getHomes().then(response => setHomes(response));
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
                        homesSold.map(home => {
                            return <HomeSold home={home} homesLoading={homesLoading}  />
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