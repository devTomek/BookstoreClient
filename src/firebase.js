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
        this.auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("login")
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    logout = () =>
        this.auth.signOut().then(() => {
            console.log("logout")
        }).catch((error) => {
            console.error(error);
        });
}

export default new Firebase();
