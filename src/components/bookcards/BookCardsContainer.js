import React, { useState, useEffect } from "react";
import BookCards from "./BookCards";
import firebase from "../../firebase";
import Loader from "../loader/Loader";

const BookCardsContainer = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.getBooks().then(data => setBooks(data));
  }, []);

  return <div>{books.length ? <BookCards books={books} /> : <Loader />}</div>;
};

export default BookCardsContainer;
