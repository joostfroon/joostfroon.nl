import { GraphQLClient, gql } from 'graphql-request';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Projects from '../components/projects/Projects';
import { ProjectInterface, PersonalInterface } from '../interfaces';
import HighlightedSkills from '../components/HighlightedSkills';
import Intro from '../components/Intro';
import Personal from '../components/Personal';
import { AppContextProvider } from '../context/app';

const NUMBER_OF_PROJECTS = 50;
const PERSONAL_ID = 'clcbx00yv72uu0bw6y8h4outs';
const API_URL = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clazi958h1r9301uk014zh9ho/master';

interface Props {
  data: {
    projects: ProjectInterface[];
    personal: PersonalInterface;
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const graphQLClient = new GraphQLClient(API_URL);

  const data = await graphQLClient.request(gql`
    query Projects {
      projects(orderBy: date_DESC, first: ${NUMBER_OF_PROJECTS}) {
        name
        id
        date
        location
        description
        skills
        role
      }
      personal(where: {id: "${PERSONAL_ID}"}) {
        id
        birthday
        description
        title
        name
        nationality
        number
        postalCode
        email
        highlighedSkills
        hobbies
        country
        companyName
        city
        province
        gitlab
        linkedin
        image {
          url
          height
          width
        }
        languages {
          ... on Language {
            id
            name
          }
        }
        tel
        street
        website
      }
    }
  `);

  return {
    props: { data }
  };
};

export default function Index({ data }: Props) {
  return (
    <AppContextProvider {...data}>
      <Head>
        <title>{data.personal.description} | {data.personal.name}</title>
        <meta name="description" content={data.personal.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Intro />
        <Personal />
        <HighlightedSkills />
      </header>
      <Projects />
    </AppContextProvider>
  );
};
