/* eslint-disable react/react-in-jsx-scope */
import { POSTS_URL } from '@/config/app-config';
import { getAllPosts } from '@/data/get-all-posts';
import { getPost } from '@/data/get-post';
import { Post } from '@/containers/Post/index';

export async function generateStaticParams() {
  const posts = await getAllPosts(POSTS_URL);

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const post = await getPost(slug);
  const postSlug = post[0];
  console.log(postSlug);
  return <Post postSlug={postSlug} />;
}
