import React, { useState, useEffect } from "react";
import BookCards from "./BookCards";
import firebase from "../../firebase";
import Loader from "../loader/Loader";

const BookCardsContainer = () => {
  const [books, setBooks] = useState([]);
  const [bookPictureUrl, setBookPictureUrl] = useState("");

  useEffect(() => {
    firebase.getBooks().then(books => setBooks(books));
    firebase.getBookPicture().then(url => setBookPictureUrl(url));
  }, []);

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
