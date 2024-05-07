const saveAsFavorite = (showObject: any) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const isAlreadyFavorite = favorites.some(
    (item: { id: any }) => item.id === showObject.id
  );

  if (!isAlreadyFavorite) {
    favorites.push(showObject);

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

const removeAsFavorite = (showId: number) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  const updatedFavorites = favorites.filter(
    (item: { id: number }) => item.id !== showId
  );

  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};
