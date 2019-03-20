import React, { useState, useEffect, Suspense, lazy } from "react";
import Loader from "./loader/Loader";
import firebase from "../firebase";

const NavigationBarContainer = lazy(() =>
    import("./navigationBar/NavigationBarContainer")
);
const BookCardsContainer = lazy(() => import("./bookcards/BookCardsContainer"));
const FooterContainer = lazy(() => import("./footer/FooterContainer"));
const LoginPageContainer = lazy(() => import("./loginPage/LoginPageContainer"))

const App = () => {
    const [user, setUser] = useState(null);

    const authListener = () => {
        firebase.auth.onAuthStateChanged(user => user ? setUser(user) : setUser(null));
    };

    useEffect(() => {
        authListener();
    }, [])

    return (
        <Suspense fallback={<Loader />}>
            {user ?
                <>
                    <NavigationBarContainer />
                    <BookCardsContainer />
                    <FooterContainer />
                </> :
                <LoginPageContainer />
            }
        </Suspense>
    );
}

export default App;
