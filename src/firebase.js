import app from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/storage";
import "firebase/auth";
import { createNotification } from "./components/app/App";
import { SUCCESS, ERROR, WARNING } from "./constants";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

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

    googleLogin = () => {
        const provider = new app.auth.GoogleAuthProvider();

        this.auth.signInWithPopup(provider)
            .then(() => createNotification(SUCCESS, "Logged in", "Login"))
            .catch(error => createNotification(ERROR, error.message, "Login", 0));
    };
}

export default new Firebase();
