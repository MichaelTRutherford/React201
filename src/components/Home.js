import Hero from "./Hero";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([])

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
    const api_key = 'api-key'
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
      setNowPlaying(data.results)
      console.log(data)
    })
  })

  function renderNowPlaying() {
    if(nowPlaying){
      const resultsHtml = nowPlaying.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
      })

      return (
        <div>
          <Hero text="Now Playing" />
          {resultsHtml &&
            <div className="container">
              <div className="row">
                {resultsHtml}
              </div>
            </div>
          }
        </div>
      )
    }
  };

  return renderNowPlaying()
};

export default Home;
