import { createContext } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Project from '../components/Project';
import { ProjectInterface } from '../interfaces';


const NUMBER_OF_PROJECTS = 50;
const PERSONAL_ID = 'clcbx00yv72uu0bw6y8h4outs';
const API_URL = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clazi958h1r9301uk014zh9ho/master';

interface Props {
  data: {
    projects: ProjectInterface[];
  }
}

const AppContext = createContext<any>(null);

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
        name
      }
    }
  `);

  return {
    props: { data }
  };
};

export default function Index({ data }: Props) {
  console.log('data', data);
  return (
    <AppContext.Provider value={data}>
      <Head>
        <title>Freelance Front-end developer | Joost Froon</title>
        <meta name="description" content="Front-end developer and React developer located in Zevenaar near Arhnem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        HEADER
      </header>

      <main>
        {data.projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </main>

    </AppContext.Provider>
  );
};
