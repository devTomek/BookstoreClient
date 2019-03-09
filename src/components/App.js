import React, { Component, Suspense, lazy } from "react";

const NavigationBarContainer = lazy(() =>
  import("./navigationBar/NavigationBarContainer")
);
const BookCardsContainer = lazy(() => import("./bookcards/BookCardsContainer"));
const FooterContainer = lazy(() => import("./footer/FooterContainer"));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <NavigationBarContainer />
        <BookCardsContainer />
        <FooterContainer />
      </Suspense>
    );
  }
}

export default App;
