import { Card } from "@/types/types";

export const saveAsFavorite = (show: Card) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (!favorites.includes(show)) {
    favorites.push(show);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

export const removeAsFavorite = (show: Card) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const updatedFavorites = favorites.filter(
    (item: Card) => item.id !== show.id
  );
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};
