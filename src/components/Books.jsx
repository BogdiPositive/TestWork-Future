import React, {useState} from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "../style/Books.css";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../store/search";


// AIzaSyB4YE5q0m9o4GCVyM7PUGgZ3013M3ffgCg

const Cards = () => {
  const dispatch = useDispatch();
  const [loadMore, setLoadMore] = useState(30);
  const books = useSelector((state) => state.search.books);
  const title = useSelector((state) => state.search.title)
  const category = useSelector((state) => state.search.category)
  const sortedBy = useSelector((state) => state.search.sortedBy)
  const allSearchBooks = useSelector((state) => state.search.allSearch);
 
  const handleSearch = () => {
     let url = `https://www.googleapis.com/books/v1/volumes?q=${title}&subject=${category}&orderBy=${sortedBy}&startIndex=${loadMore}&maxResults=30&key=AIzaSyB4YE5q0m9o4GCVyM7PUGgZ3013M3ffgCg`

      dispatch(fetchBooks(url));
    
    setLoadMore(loadMore + 30) 

  };

  return (
    <div>
      <h3>{allSearchBooks.totalItems}</h3>
      <div className="booksContainer">
        {books.map((book) => (
          <Card bookInfo={book} key={book.id} />
        ))}
      </div>
      {books.length > 0 ? (
        <div><button onClick={handleSearch}>Показать еще</button></div>
      ): <></>}
      
    </div>
  );
};

export default Cards;
