import React, { useState, useEffect } from "react";
import LoginPage from "./LoginPage";
import firebase from "./../../firebase";
import Loader from "../loader/Loader";

const LoginPageContainer = () => {
    const [backgroundPicture, setBackgroudPicture] = useState("");

    useEffect(() => {
        firebase.getBackground().then(url => setBackgroudPicture(url));
    }, [])

    return backgroundPicture ? <LoginPage backgroundPicture={backgroundPicture} /> : <Loader />
}

export default LoginPageContainer;