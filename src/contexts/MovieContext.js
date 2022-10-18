import { createContext, useState } from "react";
import { BASE_URL } from "../app/config";
import { API_KEY } from "../app/config";
const MovContext = createContext();

function MovProvider({ children }) {
  const [movies, setMovies] = useState();
  const [trendingMovies, setTrendingMovies] = useState();
  const [topRated, setTopRated] = useState();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [genres, setGenres] = useState();
  const [chosenGenre, setChosenGenre] = useState();
  const [q, setQ] = useState("");
  const [keywords, setKeywords] = useState();
  const [keyword, setKeyword] = useState();

  return (
    <MovContext.Provider
      value={{
        chosenGenre,
        setChosenGenre,
        movies,
        setMovies,
        trendingMovies,
        setTrendingMovies,
        movie,
        setMovie,
        loading,
        setLoading,
        error,
        setError,
        genres,
        setGenres,
        API_KEY,
        BASE_URL,
        q,
        setQ,
        keywords,
        setKeywords,
        keyword,
        setKeyword,
        topRated,
        setTopRated,
      }}
    >
      {children}
    </MovContext.Provider>
  );
}

export { MovContext, MovProvider };
