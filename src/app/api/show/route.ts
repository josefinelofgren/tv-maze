export async function GET(req: any) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const country = searchParams.get("country");
    const today = new Date().toISOString().slice(0, 10);
    let apiUrl = `https://api.tvmaze.com/schedule`;

    if (country) {
      apiUrl += `?country=${country}&date=${today}`;
    }

    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    const idSet = new Set();
    const filteredData = data.reduce((acc: any[], item: any) => {
      if (!idSet.has(item.show.id)) {
        idSet.add(item.show.id);
        acc.push({
          id: item.show.id,
          name: item.show.name,
          image: item.show.image,
          genres: [item.show.type, ...item.show.genres],
        });
      }
      return acc;
    }, []);

    return Response.json(filteredData, { status: 200 });
  } catch (error) {
    return Response.error();
  }
}
