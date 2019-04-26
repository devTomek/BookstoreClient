import React from 'react';
import styles from "./HomePage.module.scss";
import NavigationBarContainer from "../navigationBar/NavigationBarContainer";
import BookCardsContainer from "../bookcards/BookCardsContainer";
import FooterContainer from "../footer/FooterContainer";

const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <NavigationBarContainer />
            <BookCardsContainer />
            <FooterContainer />
        </div>
    )
}

export default HomePage
