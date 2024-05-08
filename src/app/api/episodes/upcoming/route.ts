export async function GET(req: any) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const id = searchParams.get("id");
    const apiUrl = `https://api.tvmaze.com/shows/${id}/episodes`;

    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch upcoming episodes data: ${res.status} ${res.statusText}`
      );
    }

    const episodesData = await res.json();

    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);

    const upcomingEpisodesData = episodesData.filter((episodeData: any) => {
      const airdate = new Date(episodeData.airdate);
      return airdate >= tomorrowDate;
    });

    const filteredUpcomingEpisodesData = upcomingEpisodesData.map(
      (episodeData: any) => ({
        id: episodeData.id,
        name: episodeData.name,
        image: episodeData.image,
        airdate: episodeData.airdate,
        airtime: episodeData.airtime,
      })
    );

    return Response.json(filteredUpcomingEpisodesData, { status: 200 });
  } catch (error) {
    return Response.error();
  }
}
