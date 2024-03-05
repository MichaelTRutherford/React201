import Hero from "./Hero";
import MovieCard from "./MovieCard";

const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`
    var resultsHtml
    if(searchResults.length === 0){
        resultsHtml = <h1 className="my-5">No movie found</h1> 
    } else {
        resultsHtml = searchResults.map((obj, i) => {
            return <MovieCard movie={obj} key={i} />
          })
    }

 
    return (
        <div>
            <Hero text={title} />
            { resultsHtml &&
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>
            }
        </div>
    );
};

export default SearchView;