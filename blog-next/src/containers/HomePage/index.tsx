/* eslint-disable react/react-in-jsx-scope */
// import { PostData } from '@/domain/posts/post';
import { Container } from './styles';
// import { fetchJson } from '@/utils/fetch-json';
// import { POSTS_URL } from '@/config/app-config';
import { PostCard } from '@/components/PostCard';
import Header from '@/components/Header';
import MainContainer from '@/components/MainContainer';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/data/get-all-posts';

export default async function HomePage() {
  const posts = await getAllPosts('sort=id:desc&_start=0&_limit=30');

  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              cover={post.cover.formats.small.url}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
