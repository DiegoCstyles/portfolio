import { memo, useState  } from 'react';
import translations from './Translations';
import Journey from './Journey';
import Career from './Career';
import FreeTime from './FreeTime';

interface AboutProps {
  currentLanguage: string;
}
const Section = ({ currentLanguage }: AboutProps) => {
  const [hoveredSpan, setHoveredSpan] = useState<string | null>(null);

  const handleSpanHover = (spanName: string | null) => {
    setHoveredSpan(spanName);
  };

  return (
      <section className="py-12 sm:py-16 items-center justify-center bg-fuchsia-500 dark:bg-fuchsia-500">
        
        <div className="mx-auto max-w-[80rem] text-center">
            {/* Heading */}
            <div className="justify-center items-center">
              <h1 className="light:text-black dark:text-white mt-3 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[3rem] tracking-tight uppercase font-black">
                {translations[currentLanguage].h1}
              </h1>
            </div>

            {/* about */}
            <div className="text-sm tracking-tight font-medium leading-relaxed text-white dark:text-black">
              <Journey currentLanguage={currentLanguage} />
              <Career currentLanguage={currentLanguage} />
              <FreeTime currentLanguage={currentLanguage} />
            </div>
              
            {/* timeline */}
            <div style={{ transform: 'translateY(var(--timeline-offset))' }} className="mt-8 sm:mt-12 font-medium">
              
              <div className="flex flex-col mt-3 text-base leading-relaxed text-black dark:text-white">
                <div>
                  <h2 className="text-left text-2xl leading-relaxed text-black dark:text-white">{translations[currentLanguage].h2Career} /&gt;</h2>
                </div>
              </div>
              <div onMouseEnter={() => handleSpanHover('firstSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex flex-col sm:flex-row items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 sm:ml-4 sm:mr-4 ${hoveredSpan === 'firstSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className=" border border-black dark:border-white rounded-md text-center light:text-black dark:text-white w-full sm:w-96 p-2"> • {translations[currentLanguage].firstCareerTitle}</p>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-center text-white dark:text-black hidden sm:block">AtendeiTi</p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-center text-white dark:text-black hidden sm:block">2022 - 2023</p>
                </div>
                {hoveredSpan === 'firstSpan' && <span className='ml-10 text-xs sm:text-sm text-justify p-2'>
                  <strong className="text-black dark:text-white">
                    {translations[currentLanguage].firstCareerP1}
                  </strong>
                  {translations[currentLanguage].firstCareerP2} 
                </span>}
              </div>
              <div onMouseEnter={() => handleSpanHover('secondSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex flex-col sm:flex-row items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 sm:ml-4 sm:mr-4 ${hoveredSpan === 'secondSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className="border border-black dark:border-white rounded-md text-center light:text-black dark:text-white w-full sm:w-96 p-2"> • {translations[currentLanguage].secondCareerTitle}</p>
                    
                  </div>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-center text-white dark:text-black hidden sm:block">Objetivo Lorena</p>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-center text-white dark:text-black hidden sm:block">2021 - 2022</p>                 
                </div> 
                {hoveredSpan === 'secondSpan' && <span className='ml-10 text-xs sm:text-sm text-justify p-2'>
                  {translations[currentLanguage].secondCareerP1}
                  <strong className="text-black dark:text-white">
                    {translations[currentLanguage].secondCareerP2}
                  </strong>
                  {translations[currentLanguage].secondCareerP3}
                  <strong className="text-black dark:text-white mr-1">
                    {translations[currentLanguage].secondCareerP4}
                  </strong> 
                  {translations[currentLanguage].secondCareerP5}
                </span>}
              </div>

              <div className=" flex items-start mt-20 text-base leading-relaxed text-black dark:text-white">
                <div>
                  <h2 className="text-left text-2xl leading-relaxed text-black dark:text-white">{translations[currentLanguage].h2Education} /&gt;</h2>
                </div>
              </div>
              <div onMouseEnter={() => handleSpanHover('thirdSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex flex-col sm:flex-row items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 sm:ml-4 sm:mr-4 ${hoveredSpan === 'thirdSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className=" border border-black dark:border-white rounded-md text-center light:text-black dark:text-white w-full sm:w-96 p-2"> • {translations[currentLanguage].firstAcademicTitle}</p>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-center text-white dark:text-black hidden sm:block">{translations[currentLanguage].firstAcademict}</p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-center text-white dark:text-black hidden sm:block">2019 - 2023</p>
                </div>
                {hoveredSpan === 'thirdSpan' && <span className='ml-10 text-xs sm:text-sm text-justify p-2'>
                  {translations[currentLanguage].firstAcademicP1}
                  
                  <strong className="text-black dark:text-white">
                    {translations[currentLanguage].firstAcademicP2}
                  </strong>
                  {translations[currentLanguage].firstAcademicP3}
                  
                  <strong className="text-black dark:text-white">
                    {translations[currentLanguage].firstAcademicP4}
                  </strong>
              </span>}
              </div>
              <div onMouseEnter={() => handleSpanHover('fourthSpan')} onMouseLeave={() => handleSpanHover(null)} className={`zoom-effect flex flex-col sm:flex-row items-start mt-3 text-base leading-relaxed text-black dark:text-black p-1.5 sm:ml-4 sm:mr-4 ${hoveredSpan === 'fourthSpan' ? 'active' : ''}`}>
                <div className='text-left'>
                  <div className='flex'>
                    <p className=" border border-black dark:border-white rounded-md text-center light:text-black dark:text-white w-full sm:w-96 p-2"> • {translations[currentLanguage].secondAcademicTitle}</p>

                  </div>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-center text-white dark:text-black hidden sm:block">{translations[currentLanguage].secondAcademic}</p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-center text-white dark:text-black hidden sm:block">2016 - 2018</p>
                </div>
                {hoveredSpan === 'fourthSpan' && <span className='ml-10 text-xs sm:text-sm text-justify p-2 light:text-black dark:text-white'>
                  {translations[currentLanguage].secondAcademicP1}
                  
                  <strong className="text-black dark:text-white">
                    {translations[currentLanguage].secondAcademicP2}
                  </strong>
                  {translations[currentLanguage].secondAcademicP3}
                  
                  <strong className="text-black dark:text-white">
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
