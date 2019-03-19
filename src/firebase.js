import config from "./firebaseConfig";
import app from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/storage";
import "firebase/auth";

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
    this.storage = app.storage();
    this.auth = app.auth();
    this.isLoggedIn = false;
  }

  async getBooks() {
    const books = [];
    const booksRef = this.db.collection("books");

    await booksRef
      .get()
      .then(res => res.forEach(book => books.push(book.data())))
      .catch(err => console.error(err));

    return books;
  }

  async getBookPicture() {
    let pictureUrl = "";
    const pictureRef = this.storage.ref().child("pictures/sapek.jpg");

    await pictureRef
      .getDownloadURL()
      .then(url => (pictureUrl = url))
      .catch(err => console.error(err));

    return pictureUrl;
  }

  async getBackground() {
    let pictureUrl = "";
    const pictureRef = this.storage.ref().child("pictures/loginPageBooks.jpg");

    await pictureRef
      .getDownloadURL()
      .then(url => (pictureUrl = url))
      .catch(err => console.error(err));

    return pictureUrl
  }

  login = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password).catch((error) => {
      const errorMessage = error;

      // todo dispatch to redux
      errorMessage ? this.isLoggedIn = false : this.isLoggedIn = true;

      console.error(errorMessage);
    });
  };

  logout = () =>
    this.auth.signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.error(error);
    });
}

export default new Firebase();
