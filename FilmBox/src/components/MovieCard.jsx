import { Link } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-[#1F2937] rounded-lg shadow-lg p-4 text-center text-white transform transition-transform hover:scale-105 duration-300 ease-in-out">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="w-11/12 h-80 object-cover rounded-lg mx-auto mb-4 transition-opacity duration-300 hover:opacity-90"
        />
      </Link>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold text-gray-200 truncate">{movie.title}</h3>
        <p className="text-gray-400 text-sm mt-2">Rating: {movie.vote_average}</p>
        <div className="flex gap-2 mt-3">
          
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
