import theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${theme.spacings.small};

  img {
    width: 100%;
    display: block;
    background-size: cover;
  }
`;

export const PostCardHeading = styled.h2`
  font-size: ${theme.font.sizes.medium};

  .heading {
    color: ${theme.colors.darkGray};
  }
`;
