import React from "react";
import { useNavigate } from "react-router";
const Card = ({ bookInfo }) => {
  const navigate = useNavigate();
  const { volumeInfo } = bookInfo;
  return (
    <div
      className="w-[350px] h-[400px] flex flex-col gap-2  border bg-mainColor border-black items-center p-3 hover:scale-105"
      onClick={() => navigate(`/book-detail/${bookInfo.id}`)}
    >
      
        <img
          className="w-[250px] h-[300px] overflow-hidden"
          src={volumeInfo?.imageLinks?.thumbnail}
          alt="book-image"
        />
      

      <h5 className="font-bold text-xl">{volumeInfo.title}</h5>
      <p className="card__author">{volumeInfo.authors}</p>
      <p className="card__categories">{volumeInfo.categories}</p>
    </div>
  );
};

export default Card;
