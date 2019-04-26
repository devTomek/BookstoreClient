import React, { useState, useEffect, Suspense, lazy } from "react";
import firebase from "../../firebase";
import {
    NotificationContainer,
    NotificationManager
} from "react-notifications";
import { INFO, SUCCESS, WARNING, ERROR } from "../../constants";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loader from "../loader/Loader";

const LoginPageContainer = lazy(() => import("../loginPage/LoginPageContainer"));
const HomePage = lazy(() => import("../homePage/HomePage"));
const RegisterPageContainer = lazy(() => import("../registerPage/RegisterPageContainer"))

export const createNotification = (
    type,
    message,
    title = "",
    timeOut = 3000,
    callback = () => { }
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
        <Router>
            <Suspense fallback={<Loader />}>
                {user ? <Route exact to="/" component={HomePage} /> : <Route to="/login" component={LoginPageContainer} />}
                <Route path="/register" component={RegisterPageContainer} />
                <NotificationContainer />
            </Suspense>
        </Router>
    );
};

export default App;
