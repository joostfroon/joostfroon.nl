import { GraphQLClient, gql } from 'graphql-request';
import { ProjectInterface, PersonalInterface } from '../interfaces';

interface Props {
  projects: ProjectInterface[];
  personal: PersonalInterface;
}

export const getAppData = async () => {
  const apiUrl = process.env.API_URL as string;
  const graphQLClient = new GraphQLClient(apiUrl);

  const data: Props = await graphQLClient.request(gql`
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
        printTitle
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

  const getProjects = () => data.projects.map((project) => {
    return { 
      ...project, 
      date: new Date(project.date).toLocaleDateString('en-EN', { year: 'numeric' } as { year: 'numeric' }) 
    }
  });

  const getPersonal = () => {
    const format = { day: '2-digit', month: 'long', year: 'numeric' } as { year: 'numeric' };
    const dateFormat = new Date(data.personal.birthday).toLocaleDateString('en-EN', format);

    return {
      ...data.personal,
      birthday: dateFormat,
    };
  };
  
  return {
    props: { 
      data: {
        ...data,
        projects: getProjects(),
        personal: getPersonal(),
      } 
    }
  };
}
