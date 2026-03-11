/* eslint-disable react/react-in-jsx-scope */
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MainContent } from './styled';
import { PostData } from '@/domain/posts/post';
import Heading from '@/components/Heading';
import { PostCover } from '@/components/PostCover';
import { PostDetails } from '@/components/PostDetails';
import { Postcontainer } from '@/components/PostContainer';
import { Comments } from '@/Comments/index';

export type PostProps = {
  postSlug: PostData;
};

export const Post = ({ postSlug }: PostProps) => {
  console.log(postSlug.createdAt);
  return (
    <>
      <Header />

      <MainContent>
        <Heading>{postSlug.title}</Heading>
        <PostCover
          coverUrl={postSlug.cover.formats.large.url}
          alt={postSlug.title}
        />
        <PostDetails
          date={postSlug.createdAt}
          author={postSlug.author.name}
          category={postSlug.category.name}
        />
        <Postcontainer postSlug={postSlug} />
      </MainContent>
      <Comments title={postSlug.title} slug={postSlug.slug} />

      <Footer />
    </>
  );
};
