import React, { useState } from "react";
import LoginPage from "./LoginPage";
import firebase from "./../../firebase";
import passwordValidator from "password-validator";

const LoginPageContainer = () => {
    const [backgroundPicture, setBackgroudPicture] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const schema = new passwordValidator();

    schema
        .is().min(6)
    // .is().max(100)
    // .has().uppercase()
    // .has().lowercase()
    // .has().digits()
    // .has().not().spaces()
    // .has().symbols();

    firebase.getBackground().then(url => setBackgroudPicture(url));

    const isPasswordValid = () => password ? schema.validate(password) : true;

    const handleSubmit = (e) => {
        e.preventDefault();
        isPasswordValid() && firebase.login(login, password);
    }

    return <LoginPage
        backgroundPicture={backgroundPicture}
        isPasswordValid={isPasswordValid}
        handleSubmit={handleSubmit}
        getLogin={e => setLogin(e.target.value)}
        getPassword={e => setPassword(e.target.value)} />
}

export default LoginPageContainer;