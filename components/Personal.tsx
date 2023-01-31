import styled from 'styled-components';
import Container from '../components/Container';
import Title from './Title';
import { useAppContext } from '../context/app';

const Lang = styled.span`
  &:not(:last-of-type) {
    &:after {
      content: ', ';
    }
  }
`;

const Table = styled.table`
  line-height: 150%;
  td {
    &:first-child {
      padding-right: .5rem;
      font-weight: 600;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: flex-start;
  grid-gap: 1rem;
`;

const Wrapper = styled.div`
  padding-bottom: 6rem;
  display: none;

  @media print {
    display: block;
  }
`;

export default function Personal() {
  const { 
    personal: { 
      name, 
      birthday, 
      city, 
      country, 
      province, 
      tel, 
      email, 
      nationality, 
      languages, 
      linkedin, 
      website, 
      gitlab, 
      hobbies,
    } 
  } = useAppContext();
  
  const format = { day: 'numeric', month: 'long', year: 'numeric' } as { year: 'numeric' };
  const dateFormat = new Date(birthday).toLocaleDateString('en-EN', format);

  return (
    <Wrapper>
      <Container $small>
        <Title>Personal:</Title>
        <Grid>
          <Table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Date of birth:</td>
                <td>{dateFormat}</td>
              </tr>
              <tr>
                <td>Nationality:</td>
                <td>{nationality}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Telephone:</td>
                <td>{tel}</td>
              </tr>
            </tbody>
          </Table>

          <Table>
            <tbody>
              <tr>
                <td>Languages:</td>
                <td>
                  {languages.map((lang) => (
                    <Lang key={lang.id}>{lang.name}</Lang>
                  ))}
                </td>
              </tr>
              <tr>
                <td>Based:</td>
                <td>{city}, {province}, {country}</td>
              </tr>
              <tr>
                <td>Hobbies:</td>
                <td>{hobbies}</td>
              </tr>
              <tr>
                <td>Linkedin:</td>
                <td>{linkedin}</td>
              </tr>
              <tr>
                <td>Website:</td>
                <td>{website}</td>
              </tr>
              {/* <tr>
                <td>Code:</td>
                <td>{gitlab}</td>
              </tr> */}
              
            </tbody>
          </Table>
        </Grid>
      </Container>
    </Wrapper>
  );
};
  