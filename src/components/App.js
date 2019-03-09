import React, { Component } from "react";
import NavigationBarContainer from "./navigationBar/NavigationBarContainer";
import BookCardsContainer from "./bookcards/BookCardsContainer";
import FooterContainer from "./footer/FooterContainer";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBarContainer />
        <BookCardsContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
