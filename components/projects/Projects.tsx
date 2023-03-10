import styled from 'styled-components';
import Container from '../Container';
import Title from '../Title';
import { useAppContext } from '../../context/app';
import Project from './Project';

const Wrapper = styled.div`
  padding-bottom: 6rem;

  @media print {
    padding-bottom: 0;
  }
`;

export default function Projects() {
  const { projects } = useAppContext();

  return (
    <Wrapper>
      <Container $small>
        <Title>Some notable projects:</Title>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </Container>
    </Wrapper>
  );
};
