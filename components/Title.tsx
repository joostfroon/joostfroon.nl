import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 1.25rem;
  text-transform: uppercase;
  margin: 0 0 2rem;
  padding-bottom: .5rem;
  border-bottom: .125rem solid ${({ theme }) => theme.dark};
  font-weight: 400;
`;

export default function Title({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return <H2>{children}</H2>;
}
  