import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import firebase from "../../firebase";

const NavigationBarContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const logout = () => firebase.logout();

    return <NavigationBar toggle={toggle} isOpen={isOpen} logout={logout} />;
};

export default NavigationBarContainer;
