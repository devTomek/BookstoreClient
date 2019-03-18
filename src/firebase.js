import config from "./firebaseConfig";
import app from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/storage";

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
    this.storage = app.storage();
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
}

export default new Firebase();
