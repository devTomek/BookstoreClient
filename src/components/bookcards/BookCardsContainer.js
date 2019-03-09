import React, { useState, useEffect } from "react";
import BookCards from "./BookCards";
import firebase from "../../firebase";

const BookCardsContainer = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.getBooks().then(data => setBooks(data));
  }, []);

  return <BookCards books={books} />;
};

export default BookCardsContainer;
