export async function GET() {
  try {
    const countryCode = "US";
    const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
    const apiUrl = `https://api.tvmaze.com/schedule?country=${countryCode}&date=${today}`;

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
