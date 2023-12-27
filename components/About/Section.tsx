import { memo, useEffect, useState  } from 'react';
import translations, { AboutTranslations } from './Translations';

interface AboutProps {
  currentLanguage: string;
}
const Section = ({ currentLanguage }: AboutProps) => {
  const [hoveredSpan, setHoveredSpan] = useState<string | null>(null);

  const handleSpanHover = (spanName: string | null) => {
    setHoveredSpan(spanName);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get the vertical scroll position
      const scrollPosition = window.scrollY;
      
      // Calculate the amount of offset for the image (inverted direction)
      const offsetTimeline = scrollPosition * (-0.10);

      // Apply the offset to the image using CSS variables
      document.documentElement.style.setProperty('--timeline-offset', `${offsetTimeline}px`);
    };

    // Attach the event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <section className=" hero flex-auto py-24 flex items-center justify-center animate-fade-in bg-fuchsia-950">
        
        <div className="mx-auto max-w-[55rem] text-center">
            {/* Heading */}
            <div className="flex flex-auto">
              <h1 className=" text-white dark:text-white glitch-effect1 flex-1 mt-3 text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl leading-[4rem] tracking-tight">
                {translations[currentLanguage].h1}
                <span className="glitch-effect2 text-black dark:text-black" data-text={translations[currentLanguage].h1}></span>
                <span className="glitch-effect3 text-white dark:text-white" data-text={translations[currentLanguage].h1}></span>
              </h1>
            </div>

            {/* about */}
            <div className="text-sm tracking-tight font-medium leading-relaxed text-white dark:text-white">
              <p className="mt-10">
                {translations[currentLanguage].journeyP1}
                <strong className="text-fuchsia-600 uppercase">
                  {translations[currentLanguage].journeyP2}
                </strong>
                {translations[currentLanguage].journeyP3}
              </p>
              <p className="mt-3">
                {translations[currentLanguage].careerP1}
                <strong className="text-fuchsia-600 uppercase">
                  {translations[currentLanguage].careerP2}
                </strong>
                {translations[currentLanguage].careerP3}
              </p>
              <p className="mt-3">
                {translations[currentLanguage].freeTimeP1}
                <strong className="text-fuchsia-600 uppercase">
                  {translations[currentLanguage].freeTimeP2}
                </strong>
                {translations[currentLanguage].freeTimeP3}
              </p>
            </div>
          
            {/* timeline */}
            <div style={{ transform: 'translateY(var(--timeline-offset))' }} className="mt-36 font-medium">
              
              <div className="flex items-start mt-3 text-base leading-relaxed text-black dark:text-black">
                <div>
                  <h2 className="text-left text-2xl leading-relaxed text-black dark:text-white">{translations[currentLanguage].h2Career} /&gt;</h2>
                </div>
              </div>
              <div onMouseEnter={() => handleSpanHover('firstSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 ${hoveredSpan === 'firstSpan' ? 'active' : ''}`}>
                <div className='text-left text-white'>
                  <div className='flex'>
                    <p className=" border border-black dark:border-white rounded-md text-center w-96 "> • {translations[currentLanguage].firstCareerTitle}</p>
                  </div>
                  <p className="mt-1 text-xs font-medium text-center">AtendeiTi</p>
                  <p className="mt-1 text-xs font-medium text-center">2022 - 2023</p>
                </div>
                {hoveredSpan === 'firstSpan' && <span className='ml-10 text-xs text-justify bg-white/30 rounded-md p-2'>
                  <strong className="text-white dark:text-white">
                    {translations[currentLanguage].firstCareerP1}
                  </strong>
                  {translations[currentLanguage].firstCareerP2} 
                </span>}
              </div>
              <div onMouseEnter={() => handleSpanHover('secondSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 ${hoveredSpan === 'secondSpan' ? 'active' : ''}`}>
                <div className='text-left text-white'>
                  <div className='flex'>
                    <p className="border border-black dark:border-white rounded-md text-center w-96"> • {translations[currentLanguage].secondCareerTitle}</p>
                    
                  </div>
                    <p className="mt-1 text-xs font-medium text-center">Objetivo Lorena</p>
                    <p className="mt-1 text-xs font-medium text-center">2021 - 2022</p>                 
                </div> 
                {hoveredSpan === 'secondSpan' && <span className='ml-10 text-xs text-justify bg-white/30 rounded-md p-2'>
                  {translations[currentLanguage].secondCareerP1}
                  <strong className="text-white dark:text-white">
                    {translations[currentLanguage].secondCareerP2}
                  </strong>
                  {translations[currentLanguage].secondCareerP3}
                  <strong className="text-white dark:text-white mr-1">
                    {translations[currentLanguage].secondCareerP4}
                  </strong> 
                  {translations[currentLanguage].secondCareerP5}
                </span>}
              </div>

              <div className=" flex items-start mt-20 text-base leading-relaxed text-black dark:text-black">
                <div>
                  <h2 className="text-left text-2xl leading-relaxed text-black dark:text-white">{translations[currentLanguage].h2Education} /&gt;</h2>
                </div>
              </div>
              <div onMouseEnter={() => handleSpanHover('thirdSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 ${hoveredSpan === 'thirdSpan' ? 'active' : ''}`}>
                <div className='text-left text-white'>
                  <div className='flex'>
                    <p className=" border border-black dark:border-white rounded-md text-center w-96"> • {translations[currentLanguage].firstAcademicTitle}</p>
                  </div>
                  <p className="mt-1 text-xs font-medium text-center">{translations[currentLanguage].firstAcademict}</p>
                  <p className="mt-1 text-xs font-medium text-center">2019 - 2023</p>
                </div>
                {hoveredSpan === 'thirdSpan' && <span className='ml-10 text-xs text-justify bg-white/30  rounded-md p-2'>
                  {translations[currentLanguage].firstAcademicP1}
                  
                  <strong className="text-white dark:text-white">
                    {translations[currentLanguage].firstAcademicP2}
                  </strong>
                  {translations[currentLanguage].firstAcademicP3}
                  
                  <strong className="text-white dark:text-white">
                    {translations[currentLanguage].firstAcademicP4}
                  </strong>
              </span>}
              </div>
              <div onMouseEnter={() => handleSpanHover('fourthSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 ${hoveredSpan === 'fourthSpan' ? 'active' : ''}`}>
                <div className='text-left text-white'>
                  <div className='flex'>
                    <p className=" border border-black dark:border-white rounded-md text-center w-96"> • {translations[currentLanguage].secondAcademicTitle}</p>

                  </div>
                  <p className="mt-1 text-xs font-medium text-center">{translations[currentLanguage].secondAcademic}</p>
                  <p className="mt-1 text-xs font-medium text-center">2016 - 2018</p>
                </div>
                {hoveredSpan === 'fourthSpan' && <span className='ml-10 text-xs text-justify bg-white/30  rounded-md p-2'>
                  {translations[currentLanguage].secondAcademicP1}
                  
                  <strong className="text-white dark:text-white">
                    {translations[currentLanguage].secondAcademicP2}
                  </strong>
                  {translations[currentLanguage].secondAcademicP3}
                  
                  <strong className="text-white dark:text-white">
                    {translations[currentLanguage].secondAcademicP4}
                  </strong>
                  {translations[currentLanguage].secondAcademicP5}
                </span>}
              </div>
            </div>
            
        </div>
      </section>
  );
};

export default memo(Section);
