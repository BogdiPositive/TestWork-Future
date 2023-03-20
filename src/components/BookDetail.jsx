import React from 'react'
import { useSelector } from "react-redux";
import { useParams } from 'react-router';


const BookDetail = () => {
const {bookId} = useParams();
const books = useSelector((state) => state.search.books);
const {volumeInfo} = books.find(book => book.id === bookId)
console.log(volumeInfo)
  return (
    <div>
        <div>
            <img src={
            volumeInfo.imageLinks
              ? volumeInfo.imageLinks.thumbnail
              : "#"
          } alt="" />
        </div>
        <div>
            <p>{volumeInfo.categories}</p>
            <h3>{volumeInfo.title}</h3>
            <p>{volumeInfo.authors}</p>
            <p>{volumeInfo.description}</p>
        </div>
    </div>
  )
}

export default BookDetail