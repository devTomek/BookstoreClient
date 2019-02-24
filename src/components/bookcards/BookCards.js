import React from "react";
import "./BookCards.scss";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const BookCards = ({ books }) => (
  <div className="book-cards-wrapper">
    {books.map((book, index) => (
      <div key={index} className="book-card">
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <span className="d-block">
                <strong>Tytuł</strong>
              </span>
              {book.title}
            </CardTitle>
            {book.subtitle && (
              <CardSubtitle>
                <span className="d-block">
                  <strong>Podtytuł: </strong>
                </span>
                {book.subtitle}
              </CardSubtitle>
            )}
            <CardText>
              <span className="d-block">
                <strong>Opis: </strong>
              </span>
              {book.description}
            </CardText>
            <Button className="book-card-button">Buy</Button>
          </CardBody>
        </Card>
      </div>
    ))}
  </div>
);

export default BookCards;
