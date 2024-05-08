export async function GET(req: any) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const id = searchParams.get("id");
    const apiUrl = `https://api.tvmaze.com/shows/${id}`;

    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    const filteredData = {
      id: data.id,
      name: data.name,
      image: data.image,
      language: data.langugage,
      rating: data.rating.average,
      length: data.runtime,
      genres: [data.type, ...data.genres],
      summary: data.summary,
      premiered: data.premiered,
    };

    return Response.json(filteredData, { status: 200 });
  } catch (error) {
    return Response.error();
  }
}
