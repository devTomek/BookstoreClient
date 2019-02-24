import React, { useState, useEffect } from "react";
import BookCards from "./BookCards";

const BookCardsContainer = () => {
  const [books, setBooks] = useState([]);

  useEffect(
    () =>
      setBooks([
        {
          title: "Wiedzmin. Miecz przeznaczenia",
          subtitle: "",
          author: "Andrzej Sapkowski",
          year: "2014",
          publishingHouse: "SUPERNOWA",
          isbn: "ABCD1234",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis commodi aspernatur quae sapiente, eius delectus quaerat veritatis aliquam. Ipsa."
        },
        {
          title: "Wiedzmin. Miecz przeznaczenia",
          subtitle: "",
          author: "Andrzej Sapkowski",
          year: "2014",
          publishingHouse: "SUPERNOWA",
          isbn: "ABCD1234",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis commodi aspernatur quae sapiente, eius delectus quaerat veritatis aliquam. Ipsa."
        },
        {
          title: "Wiedzmin. Miecz przeznaczenia",
          subtitle: "",
          author: "Andrzej Sapkowski",
          year: "2014",
          publishingHouse: "SUPERNOWA",
          isbn: "ABCD1234",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis commodi aspernatur quae sapiente, eius delectus quaerat veritatis aliquam. Ipsa."
        },
        {
          title: "Wiedzmin. Miecz przeznaczenia",
          subtitle: "",
          author: "Andrzej Sapkowski",
          year: "2014",
          publishingHouse: "SUPERNOWA",
          isbn: "ABCD1234",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis commodi aspernatur quae sapiente, eius delectus quaerat veritatis aliquam. Ipsa."
        },
        {
          title: "Wiedzmin. Miecz przeznaczenia",
          subtitle: "",
          author: "Andrzej Sapkowski",
          year: "2014",
          publishingHouse: "SUPERNOWA",
          isbn: "ABCD1234",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis commodi aspernatur quae sapiente, eius delectus quaerat veritatis aliquam. Ipsa."
        },
        {
          title: "Wiedzmin. Miecz przeznaczenia",
          subtitle: "",
          author: "Andrzej Sapkowski",
          year: "2014",
          publishingHouse: "SUPERNOWA",
          isbn: "ABCD1234",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis commodi aspernatur quae sapiente, eius delectus quaerat veritatis aliquam. Ipsa."
        },
        {
          title: "Wiedzmin. Miecz przeznaczenia",
          subtitle: "",
          author: "Andrzej Sapkowski",
          year: "2014",
          publishingHouse: "SUPERNOWA",
          isbn: "ABCD1234",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis commodi aspernatur quae sapiente, eius delectus quaerat veritatis aliquam. Ipsa."
        },
        {
          title: "Wiedzmin. Miecz przeznaczenia",
          subtitle: "",
          author: "Andrzej Sapkowski",
          year: "2014",
          publishingHouse: "SUPERNOWA",
          isbn: "ABCD1234",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis commodi aspernatur quae sapiente, eius delectus quaerat veritatis aliquam. Ipsa."
        },
        {
          title: "Wiedzmin. Miecz przeznaczenia",
          subtitle: "",
          author: "Andrzej Sapkowski",
          year: "2014",
          publishingHouse: "SUPERNOWA",
          isbn: "ABCD1234",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis commodi aspernatur quae sapiente, eius delectus quaerat veritatis aliquam. Ipsa."
        }
      ]),
    []
  );

  return <BookCards books={books} />;
};

export default BookCardsContainer;
