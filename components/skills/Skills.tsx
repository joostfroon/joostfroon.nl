import styled from 'styled-components';
import Skill from './Skill';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
`;

export default function Skills({ skills }: { skills: string[] }) {
  return (
    <Wrapper>
      {skills.map((skill) => <Skill key={skill} skill={skill} />)}   
    </Wrapper>
  );
};
