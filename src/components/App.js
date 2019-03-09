import React, { Component } from "react";
import NavigationBarContainer from "./navigationBar/NavigationBarContainer";
import BookCardsContainer from "./bookcards/BookCardsContainer";
import FooterContainer from "./footer/FooterContainer";

class App extends Component {
  render() {
    return (
      <>
        <NavigationBarContainer />
        <BookCardsContainer />
        <FooterContainer />
      </>
    );
  }
}

export default App;
