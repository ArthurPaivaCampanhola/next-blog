import React from 'react';
import { Container } from './styled';
import { PostDate } from '../PostDate';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ date, author, category }: PostDetailsProps) => {
  return (
    <Container>
      Criado em <PostDate date={date} /> por {author} em {category}
    </Container>
  );
};
