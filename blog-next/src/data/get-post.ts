import { POST_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';

export const getPost = async (slug: string | string[]) => {
  const stringSlug = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POST_URL}${stringSlug}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts;
};
