import React, { useState, useEffect } from "react";
import LoginPage from "./LoginPage";
import firebase from "../../firebase";
import passwordValidator from "password-validator";
import Loader from "../loader/Loader";
import { createNotification } from "../App";
import { ERROR, SUCCESS } from "../../constants";

const LoginPageContainer = () => {
    const [backgroundPicture, setBackgroudPicture] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const schema = new passwordValidator();

    schema
        .is()
        .min(6)
        .is()
        .max(100)
        .has()
        .uppercase()
        .has()
        .lowercase()
        .has()
        .digits()
        .has()
        .not()
        .spaces()
        .has()
        .symbols();

    useEffect(() => {
        getBackground();
    }, []);

    const getBackground = () =>
        firebase
            .getBackground()
            .then(url => {
                setBackgroudPicture(url);
                setLoading(false);
            })
            .catch(error => console.error(error));

    const isPasswordValid = () => {
        if (password.length > 0) {
            return schema.validate(password);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (isPasswordValid()) {
            setLoading(true);

            firebase
                .login(login, password)
                .then(errorMessage => {
                    setLoading(false);
                    setErrorMessage(errorMessage);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };

    useEffect(() => {
        // todo
        errorMessage
            ? createNotification(ERROR, errorMessage, "Login", 5000)
            : createNotification(
                  SUCCESS,
                  "Zalogowano poprawnie",
                  "Logowanie",
                  3000
              );
    }, [isLoading, errorMessage]);

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <LoginPage
                    backgroundPicture={backgroundPicture}
                    isPasswordValid={isPasswordValid()}
                    handleSubmit={handleSubmit}
                    getLogin={e => setLogin(e.target.value)}
                    getPassword={e => setPassword(e.target.value)}
                />
            )}
        </div>
    );
};

export default LoginPageContainer;
