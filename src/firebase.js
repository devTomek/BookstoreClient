import config from "./firebaseConfig";
import app from "firebase/app";
import "firebase/firebase-firestore";

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
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
}

export default new Firebase();
