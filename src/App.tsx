import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import SearchBar from "../src/components/SearchBar/SearchBar";
import MovieGrid from "../src/components/MovieGrid/MovieGrid";
import type { Movie } from "./types/movie";
// Пакуль пакідаем іншыя кампаненты закаментаванымі, бо яны не патрэбны для гэтага кроку
// import CafeInfo from '../CafeInfo/CafeInfo';
// import VoteOptions from '../VoteOptions/VoteOptions';
// import VoteStats from '../VoteStats/VoteStats';
// import Notification from '../Notification/Notification';
//

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (searchQuery: string) => {
    console.log("Search query from SearchBar:", searchQuery);
    setQuery(searchQuery);
    setMovies([]);
  };

  const handleMovieSelect = (movie: Movie) => {
    console.log("Selected movie:", movie);
  };

  return (
    <div className="app">
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />
      {/* Рэндэрым MovieGrid, калі ёсць фільмы */}
      {movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={handleMovieSelect} />
      )}
      {/* Тут будуць Loader і ErrorMessage у наступных кроках */}
    </div>
  );
}
