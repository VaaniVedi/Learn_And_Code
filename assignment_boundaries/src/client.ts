import dotenv from "dotenv";
dotenv.config();

export async function fetchFromAPI(query: string): Promise<any[]> {
  const API_KEY = process.env.GOOGLE_API_KEY;

  if (!API_KEY) {
    throw new Error("API key missing in .env");
  }

  const url = new URL("https://maps.googleapis.com/maps/api/geocode/json");

  url.searchParams.append("address", query);
  url.searchParams.append("key", API_KEY);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const data = await response.json();

  if (data.status !== "OK") {
    throw new Error(`API Error: ${data.status}`);
  }

  return data.results;
}