import styled from 'styled-components';
import { useAppContext } from '../context/app';
import Linkedin from '../icons/Linkedin';
import Whatsapp from '../icons/Whatsapp';
import Phone from '../icons/Phone';
import Print from '../icons/Print';
import GitHub from '../icons/GitHub';

const Icon = styled.svg`
  height: 2rem;

  @media all and (min-width: ${({ theme }) => theme.breakingpoints.xl}) {
    height: auto;
    width: 2rem;
  }
`;

const Item = styled.a`
  display: block;
  background-color: ${({ theme }) => theme.dark};
  padding: 1rem;
  border: none;
  color: ${({ theme }) => theme.light};
  flex: 1;
  text-align: center;
  cursor: pointer;
  opacity: .9;
  transition: .2s;

  &:hover {
    opacity: 1;
  }

  @media all and (min-width: ${({ theme }) => theme.breakingpoints.xl}) {
    margin-bottom: -1px;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  
  @media print {
    display: none;
  }
  
  @media all and (min-width: ${({ theme }) => theme.breakingpoints.xl}) {
    display: block;
    top: 50%;
    left: auto;
    bottom: auto;
    transform: translateY(-50%);
    right: 0;
  }
`;

export default function Contact() {
  const { personal } = useAppContext();

  return (
    <Wrapper>
      
      <Item aria-label="GitHub" target="_blank" href={personal.gitHub}><Icon as={GitHub} /></Item>
      <Item aria-label="Linkedin" target="_blank" href={personal.linkedin}><Icon as={Linkedin} /></Item>
      <Item aria-label="Whatsapp" target="_blank" href={`https://api.whatsapp.com/send?phone=${personal.whatsapp}`}><Icon as={Whatsapp} /></Item>
      <Item aria-label="Call" target="_blank" href={`tel:${personal.tel}`}><Icon as={Phone} /></Item>
      <Item aria-label="Print" onClick={() => window.print()} as="button"><Icon as={Print} /></Item>
    </Wrapper>
  );
}
  