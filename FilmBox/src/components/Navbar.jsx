import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "./search";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="text-white sticky top-0 z-10 bg-[#4B5563]">
            <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-wider transition-all duration-300 ease-in-out hover:text-yellow-300">
                    FilmBox
                </h1>

                {/* Hamburger Menu for Small Screens */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white sm:hidden focus:outline-none hover:bg-gray-600 p-2 rounded"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                isMenuOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>

                {/* Links for Larger Screens */}
                <div className="hidden gap-6 sm:flex items-center">
                    <Link
                        to="/"
                        className="hover:text-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out p-2 rounded"

                    >
                        Popular
                    </Link>
                    <Link
                        to="/top-rated"
                        className="hover:text-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out p-2 rounded"

                    >
                        Top Rated
                    </Link>
                    <Link
                        to="/upcoming"
                       className="hover:text-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out p-2 rounded"
                    >
                        Upcoming
                    </Link>
                </div>

                {/* Search Component */}
                <div className="hidden sm:block">
                    <Search />
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="flex flex-col gap-4 p-4 bg-gray-700 sm:hidden rounded-lg shadow-lg">
                    <Link
                        to="/"
                        className="hover:text-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out p-2 rounded"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Popular
                    </Link>
                    <Link
                        to="/top-rated"
                        className="hover:text-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out p-2 rounded"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Top Rated
                    </Link>
                    <Link
                        to="/upcoming"
                        className="hover:text-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out p-2 rounded"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Upcoming
                    </Link>
                    <Search />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
