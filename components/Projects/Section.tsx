import { memo, useEffect } from 'react';
import { FaSteamSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Icon from '../Icon';
import '../../app/styles/fadeIn.css';
import ContactImage from './code.png';
import Image from 'next/image';

interface ProjectsProps {
currentLanguage: string;
}

interface ProjectsTranslations {
  h1: string;
  h2: string;
  projects: {
    [key: string]: {
      title: string;
      description: string;
    }[];
  };
}

const translations: { [language: string]: ProjectsTranslations } = {
  en: {
    h1: 'Work. Hobby. Discovery.',
    h2: 'Featured Projects',
    projects: {
      'Last Defenders': {
        title: 'Last Defenders',
        description: 'Classic game style with modern features',
      },
      'Check System': {
        title: 'Check System',
        description: 'Risk Management with Integrated Management System - IMS',
      },
      'BeachLord': {
        title: 'BeachLord',
        description: 'Based on a game for resort tycoon (Work in Progress..)',
      },
    },
  },
  'pt-br': {
    h1: 'Trabalhar. Hobby. Descoberta.',
    h2: 'Projetos em destaque',
    projects: {
      'Last Defenders': {
        title: 'Last Defenders',
        description: 'Estilo clássico de jogo com recursos modernos',
      },
      'Check System': {
        title: 'Check System',
        description: 'Gestão de riscos com Sistema de Gestão Integrado - SGI',
      },
      'BeachLord': {
        title: 'BeachLord',
        description: 'Baseado em um jogo para resort tycoon (Trabalho em andamento..)',
      },
    },
  },
};

const projects = [
  {
    title: 'Last Defenders',
    year: '2021',
    description: 'Classic game style with modern features',
    technologies: ['Unity', 'C#', 'Photoshop', 'Azure'],
    steamLink: 'https://store.steampowered.com/app/1750690/Last_Defenders/',
    githubLink: 'https://github.com/DiegoCstyles',
    linkedinLink: 'https://www.linkedin.com/in/diegoerc/',
  },
  {
    title: 'Check System',
    year: '2023',
    description: 'Risk Management with Integrated Management System - IMS',
    technologies: ['Figma', 'Next.js', 'Typescript', 'OpenAI'],
    githubLink: 'https://github.com/DiegoCstyles/Check',
    linkedinLink: 'https://www.linkedin.com/in/diegoerc/',
  },
  {
    title: 'BeachLord',
    year: '2023',
    description: 'Based on a game for resort tycoon (Work in Progress..)',
    technologies: ['Unreal Engine', 'C++'],
    githubLink: 'https://github.com/DiegoCstyles/Beachlord',
    linkedinLink: 'https://www.linkedin.com/in/diegoerc/',
  },
];

const Section = ({ currentLanguage }: ProjectsProps) => {
  useEffect(() => {
    const handleScroll = () => {
      // Get the vertical scroll position
      const scrollPosition = window.scrollY;
      
      // Calculate the amount of offset for the image (inverted direction)
      const offsetProjects = scrollPosition * (-0.15);

      // Apply the offset to the image using CSS variables
      document.documentElement.style.setProperty('--projects-offset', `${offsetProjects}px`);
    };

    // Attach the event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="hero min-h-screen flex-auto py-24 flex items-center justify-center animate-fade-in">
      <div className="zoom-effect mx-auto ">
        <div className=" w-full h-full relative rounded-md overflow-hidden">
            <Image src={ContactImage} alt="me" className="object-cover bg-transparent opacity-70 dark:opacity-40" width={400} height={300} />
        </div>
      </div>
      <div className="mx-auto max-w-[44rem] text-center">

        {/* timeline */}
        <div className="mt-20 justify-center items-center">
          <h1 className=" text-white dark:text-white glitch-effect1 flex-1 mt-3 text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl leading-[4rem] tracking-tight">
            {translations[currentLanguage].h1}
            <span className="glitch-effect2 text-black dark:text-black" data-text={translations[currentLanguage].h1}></span>
            <span className="glitch-effect3 text-white dark:text-white" data-text={translations[currentLanguage].h1}></span>
          </h1>
          
          <div className=" mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            <div>
              <h2 className="text-left text-2xl leading-relaxed text-black dark:text-white">{translations[currentLanguage].h2} /&gt;</h2>
            </div>
          </div>
          <div className="group">
            {projects.map((project, index) => (
              
              <div key={index} className="mt-3 text-sm justify-center items-center ">
                <ol className="relative border-l border-black dark:border-gray-700">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-white dark:bg-white rounded-full -left-3 ring-8 ring-white/5 dark:ring-gray-900/5">
                      <svg className="w-2.5 h-2.5 text-fuchsia-500 dark:text-fuchsia-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                  </span>
                  <div className='zoom-effect text-start flex p-2 w-80 dark:hover:bg-opacity-5 dark:hover:bg-white dark:border-white leading-relaxed text-slate-600 dark:text-slate-400'>
                    <div className='p-5 flex flex-col'>
                      <div className='flex  justify-between'>
                        <p className="text-base text-black dark:text-white transition delay-100 duration-200 ease-in">{translations[currentLanguage].projects[project.title].title}</p>
                        <p className="text-xs mt-1">{project.year}</p>
                        <div className="flex justify-end mt-1 ml-1">
                          {project.steamLink && (
                            <Icon href={project.steamLink} target='_blank' label='Steam' classNameLink='group' icon={FaSteamSquare}></Icon>
                          )}
                          {project.githubLink && (
                            <Icon href={project.githubLink} target='_blank' label='Github' classNameIcon='ml-2' classNameLink='group' icon={FaGithub}></Icon>
                          )}
                          {project.linkedinLink && (
                            <Icon href={project.linkedinLink} target='_blank' label='Code' classNameIcon='ml-2' classNameLink='group' icon={FaLinkedin}></Icon>
                          )}
                        </div>
                      </div>
                      {project.description && (
                        <p className=" text-xs mt-1"> • {translations[currentLanguage].projects[project.title].description}</p>
                      )}
                      {project.technologies.length > 0 && (
                        <div className='flex mt-2'>
                          {project.technologies.map((technology, index) => (
                            <div className='m-1 ml-0 text-xs rounded-sm p-1 border light:border-black dark:border-white hover:bg-black/10 dark:hover:bg-white/10 text-fuchsia-500 dark:text-fuchsia-500' key={index}>
                              {technology}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </ol>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Section);
