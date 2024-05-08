import {
  EpisodeType,
  ShowDetailsType,
  UpcomingEpisodesType,
} from "@/types/types";

export const getSelectedShowEpisodes = async (
  id: number,
  setSelectedShowEpisodes: React.Dispatch<
    React.SetStateAction<EpisodeType[] | null>
  >,
  setError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const response = await fetch(`/api/episodes/?id=${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const responseData = await response.json();
    setSelectedShowEpisodes(responseData);
  } catch (error) {
    setError(true);
  }
};

export const getUpcomingEpisodes = async (
  shows: ShowDetailsType[],
  setUpcomingEpisodes: React.Dispatch<
    React.SetStateAction<UpcomingEpisodesType[][] | null>
  >,
  setError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const upcomingEpisodesData: UpcomingEpisodesType[][] = [];

    for (const show of shows) {
      const response = await fetch(`/api/episodes/upcoming/?id=${show.id}`);

      if (!response.ok) {
        throw new Error("Failed to fetch upcoming episodes");
      }

      const responseData = await response.json();
      upcomingEpisodesData.push(responseData);
    }

    setUpcomingEpisodes(upcomingEpisodesData);
  } catch (error) {
    setError(true);
  }
};
