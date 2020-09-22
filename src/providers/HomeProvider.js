import React, { useState, useEffect, createContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

export const HomeContext = createContext();

export default function HomeProvider(props) {
    const db = firebase.firestore();

    const getHomes = () => {
        return db.collection('homes').get().then(function(homes) {
            const homesArray = []
            homes.forEach(function(doc) {
                homesArray.push(doc.data())
            })
            return homesArray
        })
    }

    const getCurrentHome = (id) => {
        return db.collection('homes').doc(`${id}`).get()
    }

    const addHome = (homeObj) => {
        return db.collection('homes').add(homeObj)
    }

    return (
        <HomeContext.Provider
            value={{
                getHomes,
                addHome
            }}
        >
            {props.children}
        </HomeContext.Provider>
    )

}