import React from "react";
import PropTypes from "prop-types";
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

const BookCards = ({ books, bookPictureUrl }) => (
    <div className="book-cards-wrapper">
        {books.map((book, index) => (
            <div key={index} className="book-card-wrapper">
                <Card>
                    <CardImg
                        top
                        src={bookPictureUrl}
                        alt="sapek.jpg"
                        className="book-card-image"
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

BookCards.propTypes = {
    books: PropTypes.array.isRequired,
    bookPictureUrl: PropTypes.string.isRequired
};

export default BookCards;
