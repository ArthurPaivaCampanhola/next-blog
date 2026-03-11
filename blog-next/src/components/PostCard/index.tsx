/* eslint-disable react/react-in-jsx-scope */
import { Container, PostCardCover, PostCardHeading } from './styled';
import Link from 'next/link';

export type PostCardProps = {
  slug: string;
  cover: string;
  title: string;
};

export const PostCard = ({ slug, cover, title }: PostCardProps) => {
  return (
    <Container>
      <PostCardCover>
        <Link href={'post/[slug]'} as={`post/${slug}`}>
          <img src={cover} alt={title} />
        </Link>
      </PostCardCover>
      <PostCardHeading>
        <Link className="heading" href={'post/[slug]'} as={'post/[slug]'}>
          {title}
        </Link>
      </PostCardHeading>
    </Container>
  );
};
