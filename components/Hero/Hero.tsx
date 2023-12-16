import ContactIcons from "./ContactIcons";
import { useMediaQuery } from 'react-responsive';
import { memo, useEffect } from 'react';
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
    <section className="relative hero min-h-screen flex-auto py-24 flex items-center justify-center animate-fade-in">
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
      
      <div className="mx-auto max-w-[44rem] text-center">
        {/* Heading and Contact Icons */}
        <div className="flex  flex-auto">
          <h1 className="text-green-600 dark:text-cyan-300 flex-1 glitch-effect1 mt-3 text-7xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl leading-[4rem] tracking-tight">
            {translations[currentLanguage].title}
            <span className="glitch-effect2 text-red-500 dark:text-red-600" data-text={translations[currentLanguage].title}></span>
            <span className="glitch-effect3 text-green-400 dark:text-lime-400" data-text={translations[currentLanguage].title}></span>
          </h1>
          
          {!isMobile && (<ContactIcons />)}
        </div>

        {/* Description */}
        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {translations[currentLanguage].description}
        </p>
        {/* Contact Icons - Mobile Version */}
        {isMobile && (<div className="mt-2 flex justify-center"> <ContactIcons /> </div>)}
      </div>
      
    </section>
  );
};

export default memo(Hero);
