import { createContext, useEffect, useState, useContext } from "react";

// Create the context
export const MovieContext = createContext();

// Custom hook for accessing the context
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  // Save favorites to localStorage whenever `favorites` changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add movie to favorites
  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  // Remove movie from favorites
  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  // Check if a movie is in favorites
  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  // Provide state and functions to children
  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
