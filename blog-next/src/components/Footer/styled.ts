import theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.footer`
  color: ${theme.colors.gray};
  font-size: ${theme.font.sizes.small};
  margin: ${theme.spacings.medium};
  text-align: center;

  &:hover {
    color: ${theme.colors.primary};
  }
`;
