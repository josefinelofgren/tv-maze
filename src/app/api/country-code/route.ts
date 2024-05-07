export async function GET(latitude: number, longitude: number) {
  try {
    const apiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error(
        `Failed to country code: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    const countryCode = data.countryCode;

    return Response.json(countryCode, { status: 200 });
  } catch (error) {
    return Response.error();
  }
}
