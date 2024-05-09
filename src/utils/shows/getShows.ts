import { ShowType, ShowDetailsType } from "@/types/types";

export const getAllShows = async (
  countryCode: string,
  setShows: React.Dispatch<React.SetStateAction<ShowDetailsType[]>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    let apiUrl = "/api/show";
    if (countryCode !== "global") {
      apiUrl += `/?country=${countryCode}`;
    }

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch all shows");
    }

    const responseData = await response.json();
    setShows(responseData);
  } catch (error) {
    setError(true);
  }
};

export const getSelectedShowDetails = async (
  id: number,
  setSelectedShowDetails: React.Dispatch<React.SetStateAction<ShowType | null>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const response = await fetch(`/api/show/selected-show/?id=${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const responseData = await response.json();
    setSelectedShowDetails(responseData);
  } catch (error) {
    setError(true);
  }
};

export const getShowsBySearch = async (
  query: string | null,
  setShows: React.Dispatch<React.SetStateAction<ShowDetailsType[]>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const response = await fetch(`/api/search/?q=${query}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const responseData = await response.json();
    setShows(responseData);
  } catch (error) {
    setError(true);
  }
};
