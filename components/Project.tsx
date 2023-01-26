import { ProjectInterface } from '../interfaces';

export default function Project({ 
  name,
  date,
  location,
  description,
  skills, 
  role,
 }: ProjectInterface) {
  const format = { year: 'numeric' } as { year: 'numeric' };
  const dateFormat = new Date(date).toLocaleDateString('nl-NL', format);
  
  return (
    <div>
      <div>{name}, {location} {role.length > 0 && `-- ${role.map(r => r.replaceAll('_', ' '))}`}</div>

      {dateFormat && (
        <time dateTime={dateFormat}>{dateFormat}</time>
      )}
      
      <div>{description}</div>
      <div>{skills.map(skill => <span key={skill}>{skill.replaceAll('_', ' ')} </span>)}</div>
      <br />
    </div>
  );
};
