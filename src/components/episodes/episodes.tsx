import { useState } from "react";
import { Episode, ExtendedShowDetails } from "@/types/types";
import Select from "../input-field/select";

interface Props {
  episodes: Episode[];
}

const Episodes = ({ episodes }: Props) => {
  interface EpisodesBySeason {
    [season: number]: Episode[];
  }

  const episodesBySeason = episodes.reduce(
    (acc: EpisodesBySeason, episode: Episode) => {
      if (!acc[episode.season]) {
        acc[episode.season] = [];
      }
      acc[episode.season].push(episode);
      return acc;
    },
    {}
  );

  const sortedSeasons = Object.keys(episodesBySeason)
    .map((season) => parseInt(season))
    .sort((a, b) => a - b);

  const [selectedSeason, setSelectedSeason] = useState<number>(
    sortedSeasons[0]
  );

  const onChangeSeason = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSeason = event.target.value;
    setSelectedSeason(parseInt(selectedSeason));
  };

  return (
    <div className="h-200 p-12">
      <p className="text-lg font-bold">Episodes</p>
      <div key={selectedSeason}>
        <div className="flex items-center justify-between">
          <div style={{ width: "100px" }}>
            <p className="text-sm mt-4 font-bold">Season {selectedSeason}: </p>
          </div>
          <div style={{ width: "max-content" }}>
            <Select value={selectedSeason} onChange={onChangeSeason}>
              {sortedSeasons.map((season, index) => (
                <option key={index} value={season}>
                  Season: {season}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {episodesBySeason[selectedSeason].map((episode) => (
          <div className="flex items-center mt-2 p-4 border-b" key={episode.id}>
            <p className="text-lg mr-4" style={{ width: "50px" }}>
              {episode.number}
            </p>
            <img
              className="mr-4 rounded"
              style={{ width: "150px", height: "auto" }}
              src={
                episode.image && episode.image.original
                  ? episode.image.original
                  : episode.image && episode.image.medium
                  ? episode.image.medium
                  : ""
              }
              alt={episode.name}
            />
            <p className="text-sm font-bold flex-grow">{episode.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
