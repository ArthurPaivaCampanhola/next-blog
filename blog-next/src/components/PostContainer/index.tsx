import React from 'react';
import { Container } from './styled';
import { PostData } from '@/domain/posts/post';

export type PostcontainerProps = {
  postSlug: PostData;
};

export const Postcontainer = ({ postSlug }: PostcontainerProps) => {
  return (
    <Container>
      {postSlug.content.map((el) =>
        el.type === 'heading' ? (
          <h2 key={el.type}>{el.children[0].text}</h2>
        ) : (
          <p key={el.type}>{el.children[0].text}</p>
        ),
      )}
    </Container>
  );
};
