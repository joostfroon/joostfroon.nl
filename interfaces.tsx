interface ProjectInterface {
  name: string;
  id: string;
  location: string;
  description: string;
  skills: string[];
  role: string[];
}

export interface ProjectReqInterface extends ProjectInterface {
  startDate: string;
  endDate: string;
}

export interface ProjectResInterface extends ProjectInterface {
  date: string;  
}

interface LanguageInterface {
  id: string;
  name: string;
}

export interface ImageInterface {
  url: string;
  height: number;
  width: number;
}

export interface PersonalInterface {
  id: string;
  birthday: string;
  description: string;
  title: string;
  printTitle: string;
  name: string;
  nationality: string;
  number: string;
  email: string;
  gitHub: string;
  highlighedSkills: string[];
  hobbies: string;
  country: string;
  companyName: string;
  city: string;
  province: string;
  postalCode: string;
  image: ImageInterface;
  languages: LanguageInterface[];
  linkedin: string;
  tel: string;
  street: string;
  website: string;
  whatsapp: string;
}
