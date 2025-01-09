import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetailPage = () => {
    const { id } = useParams(); // Extract the movie ID from the URL
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);

    // Fetch movie details
    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                const response = await axios.get(
                    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
                );
                setMovie(response.data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        const fetchMovieCast = async () => {
            try {
                const response = await axios.get(
                    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
                );
                setCast(response.data.cast.slice(0, 10)); // Get the top 10 cast members
            } catch (error) {
                console.error("Error fetching cast details:", error);
            }
        };

        if (id) {
            fetchMovieDetail();
            fetchMovieCast();
        }
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="min-h-screen p-8 text-white bg-gray-900">
            {/* Movie Header */}
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
                <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg shadow-lg w-80"
                />
                <div className="flex-1">
                    <h1 className="text-4xl font-bold">{movie.title}</h1>
                    <p className="mt-2 text-lg text-gray-300">{movie.overview}</p>
                    <p className="mt-4">
                        <strong>Rating:</strong> {movie.vote_average}
                    </p>
                    <p>
                        <strong>Release Date:</strong> {movie.release_date}
                    </p>
                    <p>
                        <strong>Genres:</strong>{" "}
                        {movie.genres.map((genre) => genre.name).join(", ")}
                    </p>
                </div>
            </div>

            {/* Cast Section */}
            <div className="mt-8">
                <h2 className="mb-4 text-2xl font-bold">Cast</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
                    {cast.map((actor) => (
                        <div
                            key={actor.id}
                            className="flex flex-col items-center text-center"
                        >
                            <img
                                src={
                                    actor.profile_path
                                        ? `${IMAGE_BASE_URL}${actor.profile_path}`
                                        : "https://via.placeholder.com/150"
                                }
                                alt={actor.name}
                                className="object-cover w-32 h-32 rounded-lg"
                            />
                            <p className="mt-2 font-semibold">{actor.name}</p>
                            <p className="text-sm text-gray-400">
                                {actor.character}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieDetailPage;
