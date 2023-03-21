import React from 'react'
import { useSelector } from "react-redux";
import { useParams } from 'react-router';


const BookDetail = () => {
const {bookId} = useParams();
const books = useSelector((state) => state.search.books);
const {volumeInfo} = books.find(book => book.id === bookId)
console.log(volumeInfo)
  return (
    <div className='flex gap-4 mt-20'>
        <div className='w-[450px] h-[500px]'>
            <img className='w-[400px] h-[450px]' src={
            volumeInfo?.imageLinks?.thumbnail
              
          } alt="book-image" />
        </div>
        <div className='w-[800px] flex flex-col gap-3 items-center'>
            <p>{volumeInfo.categories}</p>
            <h3 className='font-bold'>{volumeInfo.title}</h3>
            <p>{volumeInfo.authors}</p>
            <p className='overflow-hidden bg-mainColor'>{volumeInfo.description}</p>
        </div>
    </div>
  )
}

export default BookDetail