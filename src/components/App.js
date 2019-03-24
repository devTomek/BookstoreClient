import React, { useState, useEffect, Suspense, lazy } from "react";
import Loader from "./loader/Loader";
import firebase from "../firebase";
import {
    NotificationContainer,
    NotificationManager
} from "react-notifications";
import { INFO, SUCCESS, WARNING, ERROR } from "../constants";

const NavigationBarContainer = lazy(() =>
    import("./navigationBar/NavigationBarContainer")
);
const BookCardsContainer = lazy(() => import("./bookcards/BookCardsContainer"));
const FooterContainer = lazy(() => import("./footer/FooterContainer"));
const LoginPageContainer = lazy(() => import("./loginPage/LoginPageContainer"));

export const createNotification = (
    type,
    message,
    title = "",
    timeOut = 3000,
    callback = () => {}
) => {
    const result = () => {
        switch (type) {
            case INFO:
                NotificationManager.info(message, title, timeOut, callback);
                break;
            case SUCCESS:
                NotificationManager.success(message, title, timeOut, callback);
                break;
            case WARNING:
                NotificationManager.warning(message, title, timeOut, callback);
                break;
            case ERROR:
                NotificationManager.error(message, title, timeOut, callback);
                break;
            default:
                return null;
        }
    };

    return result();
};

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        authListener();
    }, []);

    const authListener = () => {
        firebase.auth.onAuthStateChanged(user =>
            user ? setUser(user) : setUser(null)
        );
    };

    return (
        <Suspense fallback={<Loader />}>
            {user ? (
                <div>
                    <NavigationBarContainer />
                    <BookCardsContainer />
                    <FooterContainer />
                </div>
            ) : (
                <LoginPageContainer />
            )}
            <NotificationContainer />
        </Suspense>
    );
};

export default App;
