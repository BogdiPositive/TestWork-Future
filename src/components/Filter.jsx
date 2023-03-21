import React, {useState} from "react";
import { category, sortingBy } from "../assets/constants";
import { useDispatch } from "react-redux";
import { fetchBooks, handelSearchMedia ,handelSearchQuery } from "../store/search";
import { useNavigate } from "react-router";

const Filter = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");
  const [searchSortedBy, setSearchSortedBy] = useState("relevance");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    //   let response = await fetch(

    //     `https://www.googleapis.com/books/v1/volumes?q=${searchTitle}&subject=${searchCategory}&orderBy=${searchSortedBy}&maxResults=30&key=AIzaSyB4YE5q0m9o4GCVyM7PUGgZ3013M3ffgCg`
    //   );
    //   let data = await response.json();
    //   dispatch(handelSearchQuery(data));

    const query = {
      title: searchTitle,
      category: searchCategory,
      sortedBy: searchSortedBy,
    };
    let url = `https://www.googleapis.com/books/v1/volumes?q=${query.title}&subject=${query.category}&orderBy=${query.sortedBy}&maxResults=30&key=AIzaSyB4YE5q0m9o4GCVyM7PUGgZ3013M3ffgCg`
    dispatch(handelSearchQuery())
    dispatch(handelSearchMedia(query));
    dispatch(fetchBooks(url))
    navigate("/");
  };


 

  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="font-bold">Search for books</h1>
      </div>
      <div className="flex flex-col gap-7 items-center">
        <div className="border-2 border-gray-100 hover:border-gray-700">
          <input
            className="focus:outline-none"
            type="text"
            placeholder="search..."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <button
            className="bg-inherit"
            disabled={searchTitle === "" ? true : false}
            onClick={handleSearch}
          >
            &#9906;
          </button>
        </div>
        <div className="flex gap-10">
          <div className="flex gap-2 items-center">
            <p className="font-bold">Categories</p>
            <select
              name="categories"
              onChange={(e) => setSearchCategory(e.target.value)}
            >
              {category.map((categ) => (
                <option key={categ} value={categ}>
                  {categ}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold">Sorting by</p>
            <select
              name="sortingBy"
              onChange={(e) => setSearchSortedBy(e.target.value)}
              
            >
              {sortingBy.map((sort) => (
                <option key={sort} value={sort}>
                  {sort}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
