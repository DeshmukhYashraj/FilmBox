import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Search = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate(); 

    const handleSearch = (e) => {
        e.preventDefault(); 
        if (!query.trim()) {
            alert("Please enter a movie name.");
            return; 
        }

        navigate(`/search-results?query=${encodeURIComponent(query)}`);

        setQuery("");
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
                Search
            </button>
        </form>
    );
}
export default Search;
