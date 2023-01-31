import styled from 'styled-components';
import Skills from './skills/Skills';
import Container from './Container';
import Title from './Title';
import { useAppContext } from '../context/app';

const Wrapper = styled.div`
  padding-bottom: 6rem;
`;

export default function HighlightedSkills() {
  const { personal } = useAppContext();

  return (
    <Container $small>
      <Wrapper>
        <Title>Skills:</Title>
        <Skills skills={personal.highlighedSkills} />
      </Wrapper>
    </Container>
  );
};
  