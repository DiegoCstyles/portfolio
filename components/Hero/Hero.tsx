import { useMediaQuery } from 'react-responsive';
import { memo, useEffect } from 'react';
import HeroImage from './HeroImage.png';
import Image from 'next/image';
import '../../app/styles/fadeIn.css';
import translations from './Translations';

interface HeroProps {
  currentLanguage: string;
}

const Hero = ({ currentLanguage }: HeroProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <section className="relative hero min-h-screen flex-auto py-24 flex items-center justify-center light:bg-white dark:bg-black">
      
      <div className="mx-auto max-w-[80rem] text-center animate-fade-in">
        {/* Heading and Contact Icons */}
        <div className="flex  flex-auto">
          <h1 className="text-fuchsia-600 dark:text-fuchsia-600 mt-3 text-9xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-7xl leading-[4rem] tracking-tight uppercase font-black">
            {translations[currentLanguage].title}
          </h1>
        </div>

        {/* Description */}
        <p className="mt-3 text-base leading-relaxed light:text-black dark:text-white">
          {translations[currentLanguage].description}
        </p>
      </div>
      
    </section>
  );
};

export default memo(Hero);
