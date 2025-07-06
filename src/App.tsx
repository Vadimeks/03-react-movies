import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import "./App.css";
import SearchBar from "../src/components/SearchBar/SearchBar";
import MovieGrid from "../src/components/MovieGrid/MovieGrid";
import Loader from "../src/components/Loader/Loader";
import ErrorMessage from "../src/components/ErrorMessage/ErrorMessage";
import type { Movie } from "./types/movie";
import { fetchMovies } from "./services/movieService";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearchSubmit = async (searchQuery: string) => {
    console.log("Search query from SearchBar:", searchQuery);
    setQuery(searchQuery);
    setMovies([]);
    setIsLoading(true);
    setError(null);

    try {
      const fetchedMovies = await fetchMovies(searchQuery);
      if (fetchedMovies.length === 0) {
        toast.error("No movies found for your request.");
      }
      setMovies(fetchedMovies);
    } catch (err) {
      setError("Failed to fetch movies. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMovieSelect = (movie: Movie) => {
    console.log("Selected movie:", movie);
  };

  return (
    <div className="app">
      <Toaster position="top-right" /> {/* Размяшчаем Toaster */}
      <SearchBar onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />} {/* Паказваем Loader, калі ідзе загрузка */}
      {error && <ErrorMessage />}{" "}
      {/* Паказваем ErrorMessage, калі ёсць памылка */}
      {!isLoading && !error && movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={handleMovieSelect} />
      )}
      {/* Калі няма фільмаў, не загрузка і не памылка, то апавяшчэнне будзе праз toast */}
    </div>
  );
}
