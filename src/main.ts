import * as readline from "readline";
import { parseRange } from "./utils";
import { fetchBlogData, extractBlogInfo } from "./tumblrClient";
import { extractImages } from "./imageExtractor";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Entry point.
 * Keeps orchestration logic separate from business logic.
 */
async function main() {
  rl.question("enter the Tumblr blog name:\n", async blogName => {
    rl.question("enter the range:\n", async rangeInput => {
      try {
        const [start, end] = parseRange(rangeInput);

        const apiData = await fetchBlogData(blogName);
        const blogInfo = extractBlogInfo(apiData);

        console.log("\nBlog Info:");
        console.log(`title: ${blogInfo.title}`);
        console.log(`name: ${blogInfo.name}`);
        console.log(`description: ${blogInfo.description}`);
        console.log(`no of post: ${blogInfo.totalPosts}\n`);

        const images = extractImages(apiData.posts, start, end);

        images.forEach((urls, postNo) => {
          console.log(`${postNo}.`);
          urls.forEach(url => console.log(`   ${url}`));
        });

      } catch (error: any) {
        console.error("Error:", error.message);
      } finally {
        rl.close();
      }
    });
  });
}

main();