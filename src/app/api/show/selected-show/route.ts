export async function GET(req: any) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const id = searchParams.get("id");
    const apiUrl = `https://api.tvmaze.com/shows/${id}`;

    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch show data: ${res.status} ${res.statusText}`
      );
    }

    const showData = await res.json();

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
    return Response.json(filteredShowData, { status: 200 });
  } catch (error) {
    return Response.error();
  }
}
