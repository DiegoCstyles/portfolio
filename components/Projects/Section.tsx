import { memo } from 'react';
import { FaSteamSquare, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Icon from '../Icon';
import '../../app/styles/fadeIn.css';
import translations from './Translations';

interface ProjectsProps {
  currentLanguage: string;
}

const projects = [
  {
    title: 'Last Defenders',
    year: '2021',
    description: 'Classic game style with modern features',
    technologies: ['Unity', 'C#', 'Photoshop', 'Azure'],
    steamLink: 'https://store.steampowered.com/app/1750690/Last_Defenders/',
    githubLink: 'https://github.com/DiegoCstyles',
  },
  {
    title: 'Check System',
    year: '2023',
    description: 'Risk Management with Integrated Management System - IMS',
    technologies: ['Figma', 'Next.js', 'Typescript', 'OpenAI'],
    githubLink: 'https://github.com/DiegoCstyles/Check',
  },
  {
    title: 'BeachLord',
    year: '2023',
    description: 'Based on a game for resort tycoon (Work in Progress..)',
    technologies: ['Unreal Engine', 'C++'],
    githubLink: 'https://github.com/DiegoCstyles/Beachlord',
  },
];

const Section = ({ currentLanguage }: ProjectsProps) => {
  return (
    <section className="hero min-h-screen flex-auto py-24 sm:py-16 lg:py-24 flex items-center justify-center animate-fade-in">
      <div className="mx-auto max-w-[80rem] text-center">

        {/* timeline */}
        <div className="mt-8 justify-center items-center">
          <h1 className="light:text-black dark:text-white mt-3 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[4rem] tracking-tight uppercase font-black">
            {translations[currentLanguage].h1}
          </h1>
          
          <div className=" mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            <div>
              <h2 className="text-left text-xl sm:text-2xl leading-relaxed text-black dark:text-white">{translations[currentLanguage].h2} /&gt;</h2>
            </div>
          </div>
          <div className="group">
            {projects.map((project, index) => (
              
              <div key={index} className="mt-6 sm:mt-8 text-sm justify-center items-center">
                <ol className="relative border-l border-black dark:border-gray-700">
                  <div className='zoom-effect text-start flex p-2 w-full dark:hover:bg-opacity-5 dark:hover:bg-white dark:border-white leading-relaxed text-slate-600 dark:text-slate-400 sm:w-80 h-auto'>
                    <div className='p-5 flex flex-col'>
                      <div className='flex justify-between'>
                        <p className="text-base text-black dark:text-white transition delay-100 duration-200 ease-in">{translations[currentLanguage].projects[project.title].title}</p>
                        <p className="text-xs mt-1">{project.year}</p>
                        <div className="flex justify-end mt-1 ml-1">
                          {project.steamLink && (
                            <Icon href={project.steamLink} target='_blank' label='Steam' classNameLink='group' icon={FaSteamSquare}></Icon>
                          )}
                          {project.githubLink && (
                            <Icon href={project.githubLink} target='_blank' label='Github' classNameIcon='ml-2' classNameLink='group' icon={FaGithub}></Icon>
                          )}
                        </div>
                      </div>
                      {project.description && (
                        <p className="text-xs mt-1"> • {translations[currentLanguage].projects[project.title].description}</p>
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
