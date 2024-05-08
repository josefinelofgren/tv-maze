import { useState } from "react";
import { EpisodeType } from "@/types/types";
import Select from "../input-field/select";
import defaultImage from "./../../assets/no-image.svg";

interface Props {
  episodes: EpisodeType[];
}

const Episodes = ({ episodes }: Props) => {
  interface EpisodesBySeason {
    [season: number]: EpisodeType[];
  }

  const episodesBySeason = episodes.reduce(
    (acc: EpisodesBySeason, episode: EpisodeType) => {
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
          <div
            className="flex items-center mt-2 p-4 border-b border-black-700"
            key={episode.id}
          >
            <p className="text-lg mr-6" style={{ width: "auto" }}>
              {episode.number}
            </p>
            <div className="mr-4" style={{ maxWidth: "140px" }}>
              <img
                className="rounded w-full object-cover h-auto"
                src={
                  episode.image && episode.image.original
                    ? episode.image.original
                    : episode.image && episode.image.medium
                    ? episode.image.medium
                    : defaultImage.src
                }
                alt={episode.name}
              />
            </div>
            <p className="text-sm font-bold flex-grow">{episode.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
