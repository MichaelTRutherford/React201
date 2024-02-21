import "./App.css";
import { useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import NotFound from "./components/NotFound";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
const [searchResults, setSearchResults] = useState([])
const [searchText, setSearchText] = useState('');

useEffect(() => {
  if(searchText){
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`
    const api_key = 'api key'
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + api_key,
      }
    }
    fetch(url, options)
    .then(response => response.json())
    .then(data => {

      setSearchResults(data.results)
      
      console.log(data.results)
    })
  }  
}, [searchText] )
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace/>} />
      </Routes>
    </div>
  );
}

export default App;
