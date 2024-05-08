export async function GET(req: any) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const query = searchParams.get("q");

    const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`;

    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    const filteredData = data.map((item: any) => ({
      id: item.show.id,
      name: item.show.name,
      image: item.show.image,
      length: item.show.runtime,
      genres: [item.show.type, ...item.show.genres],
    }));

    return Response.json(filteredData, { status: 200 });
  } catch (error) {
    return Response.error();
  }
}
