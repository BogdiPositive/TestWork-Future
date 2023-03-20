import React, { useState } from "react";
import { category, sortingBy } from "../assets/constants";
import { useDispatch } from "react-redux";
import { handelSearchQuery, handelSearchMedia } from "../store/search";
import { useNavigate } from "react-router";

const Filter = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");
  const [searchSortedBy, setSearchSortedBy] = useState("relevance");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSearch = async () => {
   
      let response = await fetch(
        
        `https://www.googleapis.com/books/v1/volumes?q=${searchTitle}&subject=${searchCategory}&orderBy=${searchSortedBy}&maxResults=30&key=AIzaSyB4YE5q0m9o4GCVyM7PUGgZ3013M3ffgCg`
      );
      let data = await response.json();
      dispatch(handelSearchQuery(data));
    
    const query = {
        title: searchTitle,
        category: searchCategory,
        sortedBy: searchSortedBy
    }
    dispatch(handelSearchMedia(query))
    navigate('/')
  };

  return (
    <div>
      <div>
        <h1>Search for books</h1>
      </div>
      <div>
        <div>
          <input
            type="text"
            placeholder="search.."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <button disabled={searchTitle===""? true : false} onClick={handleSearch}>&#9906;</button>
        </div>
        <div>
          <div>
            <p>Categories</p>
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
          <div>
            <p>Sorting by</p>
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
