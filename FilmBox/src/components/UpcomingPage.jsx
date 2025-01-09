import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";

const UpcomingPage = () => {
    const [movies, setMovies] = useState([]); // Stores the movies
    const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
    const [totalPages, setTotalPages] = useState(1); // Tracks total pages from API

    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            try {
                const response = await axios.get(
                    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${currentPage}`
                );
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages); // Updates total pages
            } catch (error) {
                console.error("Error fetching upcoming movies:", error);
            }
        };

        fetchUpcomingMovies();
    }, [currentPage]); // Refetch movies when the page changes

    const handlePageChange = (direction) => {
        if (direction === "prev" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (direction === "next" && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="min-h-screen p-4 text-white bg-gray-900">
            {/* Movies Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center mt-6 space-x-4">
                <button
                    onClick={() => handlePageChange("prev")}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:bg-gray-500"
                >
                    Previous
                </button>
                <span className="text-lg font-bold">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange("next")}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:bg-gray-500"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default UpcomingPage;
