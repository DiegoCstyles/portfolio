import { useMediaQuery } from 'react-responsive';
import { memo, useEffect } from 'react';
import HeroImage from './HeroImage.png';
import Image from 'next/image';
import '../../app/styles/fadeIn.css';

interface HeroProps {
  currentLanguage: string;
}

interface HeroTranslations {
  title: string;
  description: string;
}

const translations: { [language: string]: HeroTranslations } = {
  en: {
    title: 'Frontend developer.',
    description: 'Passionate about building responsive and dynamic web applications with React, Next.js, and Tailwind CSS.',
  },
  'pt-br': {
    title: 'Desenvolvedor Frontend.',
    description: 'Apaixonado por construir aplicações web responsivas e dinâmicas com React, Next.js e Tailwind CSS.',
  },
};

const Hero = ({ currentLanguage }: HeroProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  useEffect(() => {
    const handleScroll = () => {
      // Get the vertical scroll position
      const scrollPosition = window.scrollY;
      
      // Calculate the amount of offset for the image (inverted direction)
      const offsetSection = scrollPosition * 0.1;

      // Apply the offset to the image using CSS variables
      document.documentElement.style.setProperty('--section-offset', `${offsetSection}px`);
    };

    // Attach the event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative hero min-h-screen flex-auto py-24 flex items-center justify-center bg-black">
      <style>{`
        :root {
          --section-offset: 0;
        }

        .ltBackground {
          transform: translateY(var(--section-offset));
        }

        .dkBackground {
          transform: translateY(var(--section-offset));
        }
      `}</style>
      
      <div className="mx-auto max-w-[80rem] text-center animate-fade-in">
        {/* Heading and Contact Icons */}
        <div className="flex  flex-auto">
          <h1 className="text-fuchsia-600 dark:text-fuchsia-600 flex-1 glitch-effect1 mt-3 text-9xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-7xl leading-[4rem] tracking-tight uppercase font-black">
            {translations[currentLanguage].title}
            <span className="glitch-effect2 text-white dark:text-white" data-text={translations[currentLanguage].title}></span>
            <span className="glitch-effect3 text-fuchsia-400 dark:text-fuchsia-400" data-text={translations[currentLanguage].title}></span>
          </h1>
        </div>

        {/* Description */}
        <p className="mt-3 text-base leading-relaxed text-gray-50 dark:text-gray-50">
          {translations[currentLanguage].description}
        </p>
      </div>
      
    </section>
  );
};

export default memo(Hero);
