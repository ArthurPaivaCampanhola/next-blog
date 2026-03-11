export const fetchJson = async <T>(url: string): Promise<T> => {
  const data = await fetch(url);
  const jsonPosts = await data.json();
  const posts = jsonPosts.data;
  return posts;
};
