import React, { useState, useEffect } from "react";
import BookCards from "./BookCards";
import firebase from "../../firebase";
import EmptyDashboard from "../emptyDashboard/EmptyDashboard";

const BookCardsContainer = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.getBooks().then(data => setBooks(data));
  }, []);

  return (
    <div>{books.length ? <BookCards books={books} /> : <EmptyDashboard />}</div>
  );
};

export default BookCardsContainer;
