import React, { Component } from "react";
import NavigationBarContainer from "./components/navigationBar/NavigationBarContainer";
import BookCardsContainer from "./components/bookcards/BookCardsContainer";
import FooterContainer from "./components/footer/FooterContainer";

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
