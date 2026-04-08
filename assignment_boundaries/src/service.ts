import { fetchFromAPI } from "./client";

export async function getLocations(query: string) {
  const results = await fetchFromAPI(query);

  if (!results || results.length === 0) {
    throw new Error("No results found");
  }

  return results.map((item: any) => ({
    name: item.formatted_address,
    latitude: item.geometry.location.lat,
    longitude: item.geometry.location.lng
  }));
}