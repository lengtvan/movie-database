import { createContext, useState } from "react";

const MovContext = createContext();

function MovProvider({ children }) {
  const [movies, setMovies] = useState();
  const [topRated, setTopRated] = useState();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [genres, setGenres] = useState();
  const [chosenGenre, setChosenGenre] = useState();
  const [q, setQ] = useState("");
  const [keywords, setKeywords] = useState();
  const [keyword, setKeyword] = useState();
  const api_key = "3cc306d5e8c5f16471bd3b79122e0e60";
  return (
    <MovContext.Provider
      value={{
        chosenGenre,
        setChosenGenre,
        movies,
        setMovies,
        movie,
        setMovie,
        loading,
        setLoading,
        error,
        setError,
        genres,
        setGenres,
        api_key,
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
