import React from "react";
import { useNavigate } from "react-router";
import "../style/Card.css";
const Card = ({ bookInfo }) => {
  const navigate = useNavigate()
  const { volumeInfo } = bookInfo;
  return (

    <div className="card"
    onClick={() => navigate(`/book-detail/${bookInfo.id}`)}
    >
      {volumeInfo.imageLinks ? (
        <img
          className="card__image"
          src={
            volumeInfo.imageLinks.thumbnail
              ? volumeInfo.imageLinks.thumbnail
              : "#"
          }
          alt="book-image"
        />
      ) : (
        <p>No image</p>
      )}

      <h5 className="card__title">{volumeInfo.title}</h5>
      <p className="card__author">{volumeInfo.authors}</p>
      <p className="card__categories">{volumeInfo.categories}</p>
    </div>
  );
};

export default Card;
