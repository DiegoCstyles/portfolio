import { memo, useEffect } from 'react';
import { FaSteamSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Icon from '../Icon';
import '../../app/styles/fadeIn.css';
import ContactImage from './code.png';
import Image from 'next/image';

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

const Section = () => {
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
            <Image style={{ transform: 'translateY(var(--image-offset))' }} src={ContactImage} alt="me" className="object-cover inset-0 bg-transparent opacity-40" width={400} height={300} />
        </div>
      </div>
      <div className="mx-auto max-w-[44rem] text-center">
        {/* Heading */}
        
        <div className="flex flex-auto">
          <h1 className=" text-green-600 dark:text-cyan-300 glitch-effect1 flex-1 mt-3 text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl leading-[4rem] tracking-tight">
            Work. Hobby. Discovery.
            <span className="glitch-effect2 text-red-500 dark:text-red-600" data-text="Work. Hobby. Discovery."></span>
            <span className="glitch-effect3 text-green-400 dark:text-lime-400" data-text="Work. Hobby. Discovery."></span>
          </h1>
          
        </div>

        {/* timeline */}
        <div  style={{ transform: 'translateY(var(--projects-offset))' }} className="mt-20 justify-center items-center">
          <div className=" mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            <div>
              <h2 className="text-left text-2xl leading-relaxed text-black dark:text-white">Featured Projects /&gt;</h2>
            </div>
          </div>
          <div className="group">
            {projects.map((project, index) => (
              
              <Link href={""} key={index} className="mt-3 text-sm justify-center items-center ">
                <ol className="relative border-l border-gray-200 dark:border-gray-700 ">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-green-700 dark:bg-lime-900 rounded-full -left-3 ring-8 ring-white/5 dark:ring-gray-900/5">
                      <svg className="w-2.5 h-2.5 text-blendedCyan dark:text-blendedCyan" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                  </span>
                  <div className='zoom-effect text-start  flex  p-2 w-80 dark:hover:bg-opacity-5 dark:hover:bg-white dark:border-white leading-relaxed text-slate-600 dark:text-slate-400'>
                    <div className='p-5 flex flex-col'>
                      <div className='flex  justify-between'>
                        <p className="text-base text-black hover:underline overline hover:decoration-lime-600 dark:text-white dark:hover:decoration-blendedCyan hover:underline-offset-8 transition delay-100 duration-200 ease-in">{project.title}</p>
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
                        <p className=" text-xs mt-1"> • {project.description}</p>
                      )}
                      {project.technologies.length > 0 && (
                        <div className='flex mt-2'>
                          {project.technologies.map((technology, index) => (
                            <div className='m-1 ml-0 text-xs rounded-sm p-1 border light:border-white dark:border-black hover:bg-black/10 dark:hover:bg-white/10 text-green-500 dark:text-blendedCyan' key={index}>{technology}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </ol>
              </Link>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Section);
