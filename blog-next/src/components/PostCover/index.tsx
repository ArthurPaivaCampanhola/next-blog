import { Container, ImgContainer } from './styled';
import React from 'react';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
  return (
    <Container>
      <ImgContainer src={coverUrl} alt={alt} />
    </Container>
  );
};
