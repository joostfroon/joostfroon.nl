import styled, { css } from 'styled-components';
import Image from 'next/image';
import Container from '../components/Container';
import { useAppContext } from '../context/app';

const Name = styled.span`
  display: inline-block;
  font-size: 2rem;
`;

const Title = styled.span`
  display: inline-block;
  font-size: 3rem;
`;

const Heading = styled.h1`
  margin: 0 0 1.5rem;
  font-weight: 700;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  display: none;

  @media all and (min-width: ${({ theme }) => theme.breakingpoints.sm}) {
    display: block;
  }

  img {
    display: block;
    max-width: calc(100% - .5rem);
    height: auto;
    border-radius: 50%;
    border: .25rem solid ${({ theme }) => theme.dark};
  }
`;

const Wrapper = styled.article`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 6rem 0;

  @media all and (min-width: ${({ theme }) => theme.breakingpoints.sm}) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Item = styled.span`
  line-height: 150%;
  ${({ as }: { as?: string }) => as === 'a' && css`
    color: inherit;
  `}

  @media print {
    display: none;
  }

  &:not(:first-child) {
    &:before {
      padding: 0 .5rem;
      content: '|';
    }
  }
`;

export default function Intro() {
  const { personal: { name, title, image, street, city, number } } = useAppContext();
  
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image loading="eager" priority src={image.url} alt={name} width={300} height={279.45} />
        </ImageWrapper>
        <div>
          <Heading>
            <Name>{name}</Name>
            <Title>{title}</Title>
          </Heading>
          <div>
            <Item>October 4th 1987</Item>
            <Item as="a" target="_blank" rel="nofollow" href={`https://www.google.nl/maps/dir//${encodeURIComponent(`${name},${street} ${number},${city}`)}`}>Zevenaar, Gelderland, The Netherlands</Item>
            <Item>Dutch / English</Item>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};
  