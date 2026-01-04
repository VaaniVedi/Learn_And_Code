/**
 * Parses input range like "1-5".
 * Throws error instead of silently failing.
 */
export function parseRange(input: string): [number, number] {
  const [start, end] = input.split("-").map(Number);

  if (!start || !end || start < 1 || end < start) {
    throw new Error("Invalid range. Example: 1-5");
  }

  return [start, end];
}

/**
 * Tumblr provides multiple image sizes.
 * We explicitly choose 1280 because it is the highest quality.
 */
export function getHighestQualityImage(photoSizes: any[]): string {
  const image1280 = photoSizes.find(p => p.width === 1280);
  return image1280 ? image1280.url : photoSizes[0].url;
}
