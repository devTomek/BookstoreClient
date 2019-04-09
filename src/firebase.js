import app from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/storage";
import "firebase/auth";
import { config } from "./firebaseConfig";
import { createNotification } from "./components/app/App";
import { SUCCESS, ERROR, WARNING } from "./constants";

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.firestore();
        this.storage = app.storage();
        this.auth = app.auth();
    }

    async getBooks() {
        const books = [];
        const booksRef = this.db.collection("books");

        await booksRef
            .get()
            .then(res => res.forEach(book => books.push(book.data())))
            .catch(err => createNotification(ERROR, err, "GET: books", 0));

        return books;
    }

    async getBookPicture() {
        let pictureUrl = "";
        const pictureRef = this.storage.ref().child("pictures/sapek.jpg");

        await pictureRef
            .getDownloadURL()
            .then(url => (pictureUrl = url))
            .catch(err => createNotification(ERROR, err, "GET: book picture", 0));

        return pictureUrl;
    }

    async getBackground() {
        let pictureUrl = "";
        const pictureRef = this.storage
            .ref()
            .child("pictures/loginPageBooks.jpg");

        await pictureRef
            .getDownloadURL()
            .then(url => (pictureUrl = url))
            .catch(err => createNotification(ERROR, err, "GET: background", 0));

        return pictureUrl;
    }

    login = async (email, password) => {
        await this.auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                createNotification(SUCCESS, "Logged in", "Login")
            })
            .catch(error => {
                const errorMessage = error.message;
                createNotification(WARNING, errorMessage, "Login", 0)
            });
    };

    logout = () =>
        this.auth
            .signOut()
            .then(() => {
                createNotification(SUCCESS, "Logged out", "Login")
            })
            .catch(error => {
                createNotification(ERROR, error, "Login", 0)
            });
}

export default new Firebase();
