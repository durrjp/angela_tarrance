import React, { useState, useEffect, createContext } from "react";
import { Spinner } from "reactstrap";
import * as firebase from "firebase/app";
import "firebase/auth";

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
              var docRef= firebase.firestore().doc(`users/${signInResponse.user.uid}`)
              return docRef.get()
          })
          .then((userProfile) => {
            sessionStorage.setItem("user", JSON.stringify(userProfile.data()));
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