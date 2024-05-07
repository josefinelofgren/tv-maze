export const saveAsFavorite = (showId: number) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (!favorites.includes(showId)) {
    favorites.push(showId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

export const removeAsFavorite = (showId: number) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const updatedFavorites = favorites.filter((id: number) => id !== showId);
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};
