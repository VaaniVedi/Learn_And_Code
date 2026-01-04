import fetch from 'node-fetch';
import { BlogInfo } from "./models";

const BASE_URL = "https://%BLOG%.tumblr.com/api/read/json";

/**
 * Tumblr API v1 wraps JSON inside a JS callback.
 * We must strip it manually before parsing.
 */
export async function fetchBlogData(blogName: string): Promise<any> {
  const url = BASE_URL.replace("%BLOG%", blogName);
  const response = await fetch(url);
  const text = await response.text();

  const jsonText = text.substring(
    text.indexOf("{"),
    text.lastIndexOf("}") + 1
  );

  return JSON.parse(jsonText);
}

/**
 * Extracts only the blog metadata we actually need.
 */
export function extractBlogInfo(apiData: any): BlogInfo {
  const blog = apiData.tumblelog;

  return new BlogInfo(
    blog.title,
    blog.name,
    blog.description,
    apiData["posts-total"]
  );
}
