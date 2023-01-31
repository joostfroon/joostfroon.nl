import styled, { css } from 'styled-components';

export default styled.div`
  max-width: 75rem;
  padding: 0 1rem;
  margin: 0 auto;

  ${({ $small }: { $small?: boolean }) => $small && css`
    max-width: 62rem;
  `}
`;
