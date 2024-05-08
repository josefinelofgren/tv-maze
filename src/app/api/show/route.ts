export async function GET(req: any) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const id = searchParams.get("id");
    const episodesApiUrl = `https://api.tvmaze.com/shows/${id}/episodes`;
    const showApiUrl = `https://api.tvmaze.com/shows/${id}`;

    const [episodesResponse, showResponse] = await Promise.all([
      fetch(episodesApiUrl),
      fetch(showApiUrl),
    ]);

    if (!episodesResponse.ok) {
      throw new Error(
        `Failed to fetch episodes data: ${episodesResponse.status} ${episodesResponse.statusText}`
      );
    }

    if (!showResponse.ok) {
      throw new Error(
        `Failed to fetch show data: ${showResponse.status} ${showResponse.statusText}`
      );
    }

    const episodesData = await episodesResponse.json();
    const showData = await showResponse.json();

    const filteredShowData = {
      id: showData.id,
      name: showData.name,
      image: showData.image,
      language: showData.language,
      rating: showData.rating.average,
      length: showData.runtime,
      genres: [showData.type, ...showData.genres],
      summary: showData.summary,
      premiered: showData.premiered,
    };

    const filteredEpisodesData = episodesData.map((episodeData: any) => ({
      id: episodeData.id,
      name: episodeData.name,
      image: episodeData.image,
      season: episodeData.season,
      number: episodeData.number,
    }));

    console.log(filteredEpisodesData);

    return Response.json(
      { episodes: filteredEpisodesData, show: filteredShowData },
      { status: 200 }
    );
  } catch (error) {
    return Response.error();
  }
}
