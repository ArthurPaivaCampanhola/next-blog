/* eslint-disable react/react-in-jsx-scope */
import { Container } from './styled';

export type MainContaineProps = {
  children: React.ReactNode;
};

const MainContainer = ({ children }: MainContaineProps) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
