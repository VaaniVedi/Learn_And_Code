/**
 * Represents basic information about a Tumblr blog.
 * Using a model avoids passing loosely structured objects.
 */
export class BlogInfo {
  constructor(
    public title: string,
    public name: string,
    public description: string,
    public totalPosts: number
  ) {}
}
