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

    login = async (email, password) => {
        let errorMessage = "";

        await this.auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                // handle login
            })
            .catch((error) => {
                console.error(error.message);
                errorMessage = error.message;
            });

        return errorMessage;
    };

    logout = () =>
        this.auth.signOut().then(() => {
            // handle logout
        }).catch((error) => {
            console.error(error);
        });
}

export default new Firebase();
