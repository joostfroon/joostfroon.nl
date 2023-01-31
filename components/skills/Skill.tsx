import styled from 'styled-components';

const Item = styled.span`
  display: inline-block;
  border: .125rem solid ${({ theme }) => theme.dark};
  padding: .5rem;
  font-weight: 600;
  font-size: .938rem;
`;

export default function Skill({ skill }: { skill: string }) {
  return <Item title={skill}>{skill.replaceAll('_', ' ')}</Item>;
};
