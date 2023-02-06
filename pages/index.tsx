import { GetStaticProps } from 'next';
import Projects from '../components/projects/Projects';
import { ProjectResInterface, PersonalInterface } from '../interfaces';
import HighlightedSkills from '../components/HighlightedSkills';
import Intro from '../components/Intro';
import Personal from '../components/Personal';
import Floater from '../components/Floater';
import { AppContextProvider } from '../context/app';
import { getAppData } from '../utils/getAppData';

interface Props {
  data: {
    projects: ProjectResInterface[];
    personal: PersonalInterface;
  }
}

export const getStaticProps: GetStaticProps = async () => await getAppData();

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
