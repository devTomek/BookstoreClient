import React, { Component, Suspense, lazy } from "react";
import Loader from "./loader/Loader";

const NavigationBarContainer = lazy(() =>
  import("./navigationBar/NavigationBarContainer")
);
const BookCardsContainer = lazy(() => import("./bookcards/BookCardsContainer"));
const FooterContainer = lazy(() => import("./footer/FooterContainer"));
const LoginPageContainer = lazy(() => import("./loginPage/LoginPageContainer"))

class App extends Component {

  //todo get from redux
  isLoggedIn = false;

  render() {
    return (
      <Suspense fallback={<Loader />}>
        {this.isLoggedIn ?
          <>
            <NavigationBarContainer />
            <BookCardsContainer />
            <FooterContainer />
          </> :
          <LoginPageContainer />
        }
      </Suspense>
    );
  }
}

export default App;
