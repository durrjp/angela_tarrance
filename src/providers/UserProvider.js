import React, { useState, useEffect, createContext } from "react";
import { Spinner } from "reactstrap";
import * as firebase from "firebase/app";
import "firebase/auth";
import {db} from "../index"

export const UserContext = createContext();


export default function UserProvider(props) {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [isLoggedIn, setIsLoggedIn] = useState(user != null);
    
    const [isFirebaseReady, setIsFirebaseReady] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(() => {
        setIsFirebaseReady(true);
        });
    }, []);

    const login = (email, pw) => {
        return firebase
          .auth()
          .signInWithEmailAndPassword(email, pw)
          .then((signInResponse) => {
              debugger
              var docRef= firebase.firestore().doc(`users/${signInResponse.user.uid}`)
              return docRef.get()
          })
          .then((userProfile) => {
            debugger
            sessionStorage.setItem("user", JSON.stringify(userProfile.data));
            setIsLoggedIn(true);
          });
    };

    const logout = () => {
        return firebase
          .auth()
          .signOut()
          .then(() => {
            sessionStorage.clear();
            setIsLoggedIn(false);
          });
    };

    const getToken = () => firebase.auth().currentUser.getIdToken();

    // const getUserProfile = (firebaseUserId) => {
    //     return db.collection('users')
    //         .doc(firebaseUserId)
    //         .get()        
    // };

    return (
        <UserContext.Provider
            value={{
                isLoggedIn,
                login,
                logout,
                getToken,
                // getUserProfile
            }}
        >
            {isFirebaseReady ? (
                props.children
            ) : (
                <Spinner className="app-spinner dark" />
            )}
        </UserContext.Provider>
    )
}