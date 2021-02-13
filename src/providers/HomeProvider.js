import React, { useState, createContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/storage'

export const HomeContext = createContext();

export default function HomeProvider(props) {
    const [homesSold, setHomesSold] = useState([]);
    const db = firebase.firestore();
    const storage = firebase.storage().ref()
    const [homesLoading, setHomesLoading] = useState(true);

    const getHomes = () => {
        let homesArray = [];
        return db.collection('homes').get().then(homes => {
            homes.forEach(doc => {
                homesArray.push(doc.data());
            })
        }).then(() => {
            return homesArray;
        })
    };
    const setHomes = (homesArray) => {
        let newHomesArray = homesArray;
        let promiseArray = newHomesArray.map(home => {
            return storage.child(`homeimages/${home.Image}`).getDownloadURL().then(url => {
                const i = newHomesArray.findIndex(item => item.Street === home.Street)
                newHomesArray[i].Image = url;
                setHomesLoading(false)
            })
        })
        return Promise.all(promiseArray)
        .then(() => {
            setHomesSold(newHomesArray);
        })
    }

    const getCurrentHome = (id) => {
        return db.collection('homes').doc(`${id}`).get();
    }

    const addHome = (homeObj) => {
        return db.collection('homes').add(homeObj);
    }

    return (
        <HomeContext.Provider
            value={{
                homesSold,
                homesLoading,
                setHomesLoading,
                setHomes,
                getHomes,
                setHomesSold,
                addHome,
                getCurrentHome
            }}
        >
            {props.children}
        </HomeContext.Provider>
    )
}