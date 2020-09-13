import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./home/Home"

export default function ApplicationViews() {
    return (
        <>
        <main>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </main>
        </>
    )
}