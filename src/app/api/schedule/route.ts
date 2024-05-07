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

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.error();
  }
}
