import { ShowDetailsType } from "@/types/types";

export const saveAsFavorite = (show: ShowDetailsType) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (!favorites.includes(show)) {
    favorites.push(show);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

export const removeAsFavorite = (show: ShowDetailsType) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const updatedFavorites = favorites.filter(
    (item: ShowDetailsType) => item.id !== show.id
  );
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};

export const updateFavoritesDataFromStorage = (
  setShows: React.Dispatch<React.SetStateAction<ShowDetailsType[] | null>>
) => {
  const favoritesData = localStorage.getItem("favorites");
  if (favoritesData) {
    setShows(JSON.parse(favoritesData));
  }
};

export const handleToggleFavorite = (
  show: ShowDetailsType,
  isFavorite: boolean,
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>,
  setCountFavorites: React.Dispatch<React.SetStateAction<number>>
) => {
  const showObject = show;

  if (!isFavorite) {
    saveAsFavorite(showObject);
    setIsFavorite(true);
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setCountFavorites(favorites.length);
  } else {
    removeAsFavorite(showObject);
    setIsFavorite(false);
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setCountFavorites(favorites.length);
  }
};
