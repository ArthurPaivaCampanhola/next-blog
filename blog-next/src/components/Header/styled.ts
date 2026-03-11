import theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.large};
  padding: ${theme.spacings.medium};
  text-align: center;

  .header-title {
    color: ${theme.colors.white};
  }
`;
