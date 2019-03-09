import React, { Component, Suspense, lazy } from "react";
import Loader from "./loader/Loader";

const NavigationBarContainer = lazy(() =>
  import("./navigationBar/NavigationBarContainer")
);
const BookCardsContainer = lazy(() => import("./bookcards/BookCardsContainer"));
const FooterContainer = lazy(() => import("./footer/FooterContainer"));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <NavigationBarContainer />
        <BookCardsContainer />
        <FooterContainer />
      </Suspense>
    );
  }
}

export default App;
