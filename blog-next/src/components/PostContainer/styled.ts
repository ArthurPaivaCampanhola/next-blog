import theme from '@/styles/theme';
import styled from 'styled-components';
export const Container = styled.article`
  img {
    max-width: 100%;
  }

  p {
    margin: ${theme.spacings.medium} 0;
  }

  ul,
  ol {
    margin: ${theme.spacings.medium};
  }

  pre {
    width: 100%;
    overflow-x: auto;
    background: ${theme.colors.lightGray};
    color: ${theme.colors.darkGray};
    padding: ${theme.spacings.large};
    margin: ${theme.spacings.large} 0;
    line-height: 1.5;
    font-size: ${theme.font.sizes.medium};
  }
`;
