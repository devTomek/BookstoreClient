import React, { useState, useEffect } from "react";
import BookCards from "./BookCards";
import firebase from "../../firebase";
import Loader from "../loader/Loader";

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

  return (
    <div>
      {books.length && bookPictureUrl ? (
        <BookCards books={books} bookPictureUrl={bookPictureUrl} />
      ) : (
          <Loader />
        )}
    </div>
  );
};

export default BookCardsContainer;
