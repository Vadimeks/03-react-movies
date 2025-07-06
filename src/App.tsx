import { useState } from "react";
import { Toaster } from "react-hot-toast";
import SearchBar from "../src/components/SearchBar/SearchBar";
import "./App.css";
// Пакуль пакідаем іншыя кампаненты закаментаванымі, бо яны не патрэбны для гэтага кроку
// import CafeInfo from '../CafeInfo/CafeInfo';
// import VoteOptions from '../VoteOptions/VoteOptions';
// import VoteStats from '../VoteStats/VoteStats';
// import Notification from '../Notification/Notification';
// import type { Votes, VoteType } from './types/votes';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (searchQuery: string) => {
    console.log("Search query from SearchBar:", searchQuery);
    setQuery(searchQuery);
  };
  return (
    <div className="app">
      <Toaster /> {}
      <SearchBar onSubmit={handleSearchSubmit} />
      {/* MovieGrid, Loader, ErrorMessage */}
      {/* <CafeInfo /> */}
      {/* <VoteOptions ... /> */}
      {/* <VoteStats ... /> */}
      {/* <Notification /> */}
    </div>
  );
}
