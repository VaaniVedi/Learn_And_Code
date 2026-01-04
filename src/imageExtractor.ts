import { getHighestQualityImage } from "./utils";

/**
 * Extracts image URLs for photo posts within a given range.
 * One post may contain multiple images.
 */
export function extractImages(
  posts: any[],
  start: number,
  end: number
): Map<number, string[]> {

  const imageMap = new Map<number, string[]>();
  let postNumber = 1;

  for (const post of posts) {
    if (postNumber > end) break;

    if (postNumber >= start && post.type === "photo") {
      const urls: string[] = [];

      for (const photo of post.photos || []) {
        urls.push(getHighestQualityImage(photo.alt_sizes));
      }

      imageMap.set(postNumber, urls);
    }

    postNumber++;
  }

  return imageMap;
}
