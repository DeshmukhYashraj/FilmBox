import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-white bg-gray-800 py-4">
    

            {/* Copyright */}
            <div className="text-center text-sm mt-1">
                &copy; {new Date().getFullYear()} FilmBox. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
