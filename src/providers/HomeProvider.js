import React, { useState, useEffect, createContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/storage'

export const HomeContext = createContext();

export default function HomeProvider(props) {
    const [homes, setHomes] = useState([]);
    const db = firebase.firestore();
    const storage = firebase.storage().ref()

    const getHomes = () => {
        let newArray = []
        return db.collection('homes').get().then(homes => {
            const homesArray = []
            homes.forEach(doc => {
                homesArray.push(doc.data())
            })
            return homesArray
        }).then((homesReturned) => {
            newArray = homesReturned
            var i
            for(i = 0; i > newArray.length; i++) {
                storage.child(`homeimages/${newArray[i].Image}`).getDownloadURL().then(url => {
                    debugger
                    newArray[i].Image = url
                })
            }
        }).then(() => {
            setHomes(newArray)
        })
    }

    const getCurrentHome = (id) => {
        return db.collection('homes').doc(`${id}`).get()
    }

    const addHome = (homeObj) => {
        debugger
        return db.collection('homes').add(homeObj)
    }

    return (
        <HomeContext.Provider
            value={{
                homes,
                setHomes,
                getHomes,
                addHome
            }}
        >
            {props.children}
        </HomeContext.Provider>
    )

}