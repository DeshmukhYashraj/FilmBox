import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../src/components/Navbar"
import HomePage from '../src/components/HomePage'
import TopRatedPage from "./components/TopRatedPage";
import UpcomingPage from "./components/UpcomingPage";
import MovieDetailPage from "./components/MovieDetailPage";
import SearchResults from "./components/SearchResult";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen text-gray-900 bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/search-results" element={<SearchResults />} />

        </Routes>
        <Footer/>

      </div>
    </Router>
  );
};
<>
  <Navbar />
</>

export default App;
