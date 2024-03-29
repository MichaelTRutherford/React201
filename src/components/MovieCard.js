import { Link } from 'react-router-dom';

const MovieCard = ({ movie}) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`
    return (
        <div className="col-lg-3 col-me-3 col-2 my-4">
            <div className="card">
                <div>
                    {!posterUrl.includes("null") && <img src={posterUrl} className="card-img-top" alt={movie.original_title} />}
                </div>
                
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;