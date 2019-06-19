import React from "react";
import { Button } from "reactstrap";
import styles from "./GoogleLogin.module.scss";
import firebase from "../../firebase";

const GoogleLogin = () =>
    <div className={styles.buttonWrapper}>
        <Button className={styles.button} onClick={firebase.googleLogin}>Login with Google</Button>
    </div>;

export default GoogleLogin;