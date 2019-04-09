import React, { useState, useEffect } from "react";
import BookCards from "./BookCards";
import firebase from "../../firebase";

const BookCardsContainer = () => {
    const [books, setBooks] = useState([]);
    const [bookPictureUrl, setBookPictureUrl] = useState("");

    useEffect(() => {
        getBooks();
    }, []);

    useEffect(() => {
        getBackground();
    }, []);

    const getBooks = () => firebase.getBooks()
        .then(books => setBooks(books))
        .catch(error => console.error(error));

    const getBackground = () => firebase.getBookPicture()
        .then(url => setBookPictureUrl(url))
        .catch(error => console.error(error));

    return <BookCards books={books} bookPictureUrl={bookPictureUrl} />
};

export default BookCardsContainer;
