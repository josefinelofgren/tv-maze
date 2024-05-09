export async function GET(req: any) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const id = searchParams.get("id");
    const apiUrl = `https://api.tvmaze.com/shows/${id}/episodes`;

    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch episodes data: ${res.status} ${res.statusText}`
      );
    }

    const episodesData = await res.json();

    const filteredEpisodesData = episodesData.map((episodeData: any) => ({
      id: episodeData.id,
      name: episodeData.name,
      image: episodeData.image,
      season: episodeData.season,
      number: episodeData.number,
      summary: episodeData.summary,
    }));
    return Response.json(filteredEpisodesData, { status: 200 });
  } catch (error) {
    return Response.error();
  }
}
