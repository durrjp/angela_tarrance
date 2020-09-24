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
        let homesArray = []
        return db.collection('homes').get().then(homes => {
            homes.forEach(doc => {
                homesArray.push(doc.data())
            })
        }).then(() => {
            let promiseArray = homesArray.map(home => {
                return storage.child(`homeimages/${home.Image}`).getDownloadURL().then(url => {
                    const i = homesArray.findIndex(item => item.Street === home.Street)
                    homesArray[i].Image = url
                })
            })
            return Promise.all(promiseArray)
        }).then(() => {
            setHomes(homesArray)
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