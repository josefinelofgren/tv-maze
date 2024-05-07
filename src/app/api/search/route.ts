export async function GET() {
  try {
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${1}`;

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
