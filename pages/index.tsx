import { GraphQLClient, gql } from 'graphql-request';
import { GetStaticProps } from 'next';
import Projects from '../components/projects/Projects';
import { ProjectInterface, PersonalInterface } from '../interfaces';
import HighlightedSkills from '../components/HighlightedSkills';
import Intro from '../components/Intro';
import Personal from '../components/Personal';
import Floater from '../components/Floater';
import { AppContextProvider } from '../context/app';

interface Props {
  data: {
    projects: ProjectInterface[];
    personal: PersonalInterface;
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const apiUrl = process.env.API_URL as string;
  const graphQLClient = new GraphQLClient(apiUrl);

  const data = await graphQLClient.request(gql`
    query Projects {
      projects(orderBy: date_DESC, first: ${process.env.NUMBER_OF_PROJECTS}) {
        name
        id
        date
        location
        description
        skills
        role
      }
      personal(where: {id: "${process.env.PERSONAL_ID}"}) {
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
        whatsapp
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
      <header>
        <Intro />
        <Personal />
        <HighlightedSkills />
      </header>
      <Projects />
      <Floater />
    </AppContextProvider>
  );
};
