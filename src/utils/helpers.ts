export const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export function sortItemsByDateDesc<T extends { data?: { pubDate?: Date | string } }>(items: T[] = []): T[] {
  if (!Array.isArray(items)) return [];
  
  return [...items].sort((a, b) => {
    const dateA = new Date(a.data?.pubDate || 0).getTime();
    const dateB = new Date(b.data?.pubDate || 0).getTime();
    return dateB - dateA;
  });
}

export function createSlugFromTitle(title: string): string {
  if (!title) return '';
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getAllTags(posts: any[] = []): string[] {
  if (!Array.isArray(posts)) return [];
  const tags = new Set<string>();
  posts.forEach((post) => {
    if (post?.data?.tags && Array.isArray(post.data.tags)) {
      post.data.tags.forEach((tag: string) => tags.add(tag));
    }
  });
  return Array.from(tags);
}

export function getPostsByTag(posts: any[] = [], tag: string): any[] {
  if (!Array.isArray(posts)) return [];
  return posts.filter((post) =>
    post?.data?.tags &&
    Array.isArray(post.data.tags) &&
    post.data.tags.some((t: string) => createSlugFromTitle(t) === createSlugFromTitle(tag))
  );
}
