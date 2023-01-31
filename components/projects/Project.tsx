import styled from 'styled-components';
import { ProjectInterface } from '../../interfaces';
import Skills from '../skills/Skills';

const RoleItem = styled.span`
  &:not(:last-child) {
    &:after {
      content: '/';
      padding: 0 .25rem;
    }
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 .25rem;
`;

const Role = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin: 0 0 1.5rem;
  font-weight: 500;
  font-size: 1.125rem;

  @media print {
    font-size: 1rem;
  }
`;

const Wrapper = styled.article`
  padding: 2rem 0;
  
  &:not(:last-of-type) {
    border-bottom: .125rem solid ${({ theme }) => theme.dark};
  }

  &:first-of-type {
    padding-top: 0;
  }

  @media print {
    break-inside: avoid;
    margin-bottom: 0;
  }
`;

export default function Project({ 
  name,
  date,
  location,
  description,
  skills, 
  role,
 }: ProjectInterface) {
  const format = { year: 'numeric' } as { year: 'numeric' };
  const dateFormat = new Date(date).toLocaleDateString('en-EN', format);
  
  return (
    <Wrapper>
      <Title>{name}, {location} ({dateFormat})</Title>
      <Role>{role.length > 0 && role.map(r => <RoleItem key={r}>{r.replaceAll('_', ' ')}</RoleItem>)}</Role>
      <Description>{description}</Description>
      <Skills skills={skills} />
    </Wrapper>
  );
};
