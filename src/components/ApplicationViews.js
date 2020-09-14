import React from "react"
import { Route, Switch } from "react-router-dom"
import Angela from "./angela/Angela"
import ContactMe from "./contactme/ContactMe"
import Home from "./home/Home"
import HomesSold from "./homesSold/HomesSold"
import Recognition from "./recognition/Recognition"
import Testimonials from "./testimonials/Testimonials"

export default function ApplicationViews() {
    return (
        <>
        <main>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/homessold" exact>
                    <HomesSold />
                </Route>
                <Route path="/testimonials" exact>
                    <Testimonials />
                </Route>
                <Route path="/recognition" exact>
                    <Recognition />
                </Route>
                <Route path="/angela" exact>
                    <Angela />
                </Route>
                <Route path="/contactme" exact>
                    <ContactMe />
                </Route>
            </Switch>
        </main>
        </>
    )
}